import Dashboard from '../model/data.model.js'
import Branch from '../model/branch.model.js'
import Device from '../model/device.model.js'
import data_bufferModel from '../model/data_buffer.model.js';


async function fetchData(req, res) {
  const filters = req.body
  const pipeline = []
  let obj = {}
  Object.keys(filters).map(filter=>{
    if(filters[filter].value){
      obj[filters[filter].key] = filters[filter].value
    }
  })
  if(Object.keys(obj).length>0){
    pipeline.push({
      $match:obj
    })
  }
  console.log(pipeline,filters);
  pipeline.push({
    $group: {
      _id: null,
      ZONE_1: { $sum: { $cond: [{ $eq: ["$Z1_bp", '1'] }, 1, 0] } },
      ZONE_2: { $sum: { $cond: [{ $eq: ["$Z2_bp", '1'] }, 1, 0] } },
      ZONE_3: { $sum: { $cond: [{ $eq: ["$Z3_bp", '1'] }, 1, 0] } },
      ZONE_4: { $sum: { $cond: [{ $eq: ["$Z4_bp", '1'] }, 1, 0] } },
      ZONE_5: { $sum: { $cond: [{ $eq: ["$Z5_bp", '1'] }, 1, 0] } },
      ZONE_6: { $sum: { $cond: [{ $eq: ["$Z6_bp", '1'] }, 1, 0] } },
      ZONE_7: { $sum: { $cond: [{ $eq: ["$Z7_bp", '1'] }, 1, 0] } },
      ZONE_8: { $sum: { $cond: [{ $eq: ["$Z8_bp", '1'] }, 1, 0] } },
      ONLINE: { $sum: { $cond:  [{$eq: ['$CMS_status', "online" ]}, 1, 0]}} ,
      OFFLINE: { $sum: { $cond:  [{$eq: ['$CMS_status', "offline" ]}, 1, 0]}},
      WIFI:     { $sum: { $cond:  [{$eq: ['$Net_Con', "wifi" ]}, 1, 0]}},
      ETHERNET: { $sum: { $cond:  [{$eq: ['$Net_Con', "eth0" ]}, 1, 0]}},
      BLUETOOTH: { $sum: { $cond:  [{$eq: ['$Net_Con', "bluetooth" ]}, 1, 0]}},
      BATT_COUNT: { $sum:{$cond:[{$lt: ['$Bat_Voltage', 11.3]}, 1, 0]}},
      DAY_MODE: { $sum:{$cond:[{$in: ['$Op_Mode', ['Day','D','DAY']]}, 1, 0]}},
      NIGHT_MODE: { $sum:{$cond:[{$in: ['$Op_Mode', ['Night','N','NIGHT']]}, 1, 0]}},
    }
  },
  {
    $project: {
      _id: 0,
      ZONE: {
        ZONE_1: '$ZONE_1',
        ZONE_2: '$ZONE_2',
        ZONE_3: '$ZONE_3',
        ZONE_4: '$ZONE_4',
        ZONE_5: '$ZONE_5',
        ZONE_6: '$ZONE_6',
        ZONE_7: '$ZONE_7',
        ZONE_8: '$ZONE_8',
      },
      CMS_STATUS: {
        ONLINE: '$ONLINE',
        OFFLINE: '$OFFLINE',
      },
      DATA_CONN: [
        "$WIFI",
        "$ETHERNET",
        "$BLUETOOTH",
      ],
      BATT_COUNT: ['$BATT_COUNT'],
      DAY_MODE: ['$DAY_MODE'],
      NIGHT_MODE: ['$NIGHT_MODE']
    }
  })
  try{
    const result = await data_bufferModel.aggregate(pipeline)
    res.send(result[0] || {
      ZONE: {},
      CMS_STATUS: {},
      DATA_CONN: {},
      BATT_COUNT:[],
      DAY_MODE: [],
      NIGHT_MODE: [],
    }).status(200)
  }catch(err){
    console.log(err);
    res.send(err).status(500)
  }
}

async function insertData(req, res) {
  try {
    const {data} = req.body
    await data_bufferModel.updateOne({mac_id:data.mac_id},data,{upsert: true})
    res.send('success').status(200);
  } catch (err) {
    res.send(err).status(500);
    console.log(err)
  }
}


async function Graphdetails(req, res) {
  try {
    const { key, value, filter_key, filter_value } = req.body;
    let query = {}
    if (key) query[key] = value
    if (filter_key) query[filter_key] = filter_value
    console.log(query);
    const mac_ids = await Dashboard.find(query).distinct('mac_id');
    const datas = []
    Promise.all(mac_ids.map(async id => {
      const doc = await Dashboard.findOne({ mac_id: id });
      datas.push(doc)
    }))


    //console.log(result)
    //data extracted for devices collection
    const devices = await Device.find({ Device_ID: { $in: mac_ids } });

    const branchCodes = devices.map(item => item.Branch_Code);
    // Branch Detailes from branch collection
    const branches = await Branch.find({ Code: { $in: branchCodes } });
    //console.log(branches);


    res.json({ devices, branches, datas }).status(200);
  } catch (err) {
    res.send(err).status(500);
    console.log(err)
  }
}

async function checkAlarm(){
  const alarms = await data_bufferModel.find(
    {$or:[
      {ZONE_1:1},
      {ZONE_2:1},
      {ZONE_3:1},
      {ZONE_4:1},
      {ZONE_5:1},
      {ZONE_6:1},
      {ZONE_7:1},
      {ZONE_8:1},
    ]}
  )
  let zones = ['ZONE_1','ZONE_2','ZONE_3','ZONE_4','ZONE_5','ZONE_6','ZONE_7','ZONE_8']
  let data = []
  alarms.map(alarm=>{
    zones.map(zone=>{
      if(alarm[zone]=="1") data.push({mac_id:alarm.mac_id, zone})
    })
  })
  return data
}

export {
  fetchData,
  Graphdetails,
  insertData,
  checkAlarm
}

// async function fetchData(req,res){
//   const {key, value} = req.body
//   const pipeline = []
//   if(key && value){
//     pipeline.push({
//       $match:{
//         [key] : value
//       }
//     })
//   }
//   pipeline.push({
//     $group: {
//       _id: null,
//       ZONE_1: { $addToSet: { $cond: [{ $eq: ['$Z1_bp', '1'] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       ZONE_2: { $addToSet: { $cond: [{ $eq: ['$Z2_bp', '1'] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       ZONE_3: { $addToSet: { $cond: [{ $eq: ['$Z3_bp', '1'] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       ZONE_4: { $addToSet: { $cond: [{ $eq: ['$Z4_bp', '1'] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       ZONE_5: { $addToSet: { $cond: [{ $eq: ['$Z5_bp', '1'] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       ZONE_6: { $addToSet: { $cond: [{ $eq: ['$Z6_bp', '1'] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       ZONE_7: { $addToSet: { $cond: [{ $eq: ['$Z7_bp', '1'] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       ZONE_8: { $addToSet: { $cond: [{ $eq: ['$Z8_bp', '1'] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       ONLINE:  { $addToSet: { $cond: [{ $eq: ['$CMS_status', "online" ] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       OFFLINE: { $addToSet: { $cond: [{ $eq: ['$CMS_status', "offline"] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       WIFI:     { $addToSet: { $cond: [{ $eq: ['$Net_Con', "wifi"] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       ETHERNET: { $addToSet: { $cond: [{ $eq: ['$Net_Con', "eth0"] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       BLUETOOTH: { $addToSet: { $cond: [{ $eq: ['$Net_Con', "bluetooth"] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       BATT_COUNT: { $addToSet: { $cond: [{ $lt: ['$Bat_Voltage', 11.3] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       DAY_MODE: { $addToSet: { $cond: [{ $in: ['$Op_Mode', ['Day','D','DAY']] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//       NIGHT_MODE: { $addToSet: { $cond: [{ $in: ['$Op_Mode', ['Night','N','NIGHT']] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       ZONE: {
//         ZONE_1: { $size: '$ZONE_1' },
//         ZONE_2: { $size: '$ZONE_2' },
//         ZONE_3: { $size: '$ZONE_3' },
//         ZONE_4: { $size: '$ZONE_4' },
//         ZONE_5: { $size: '$ZONE_5' },
//         ZONE_6: { $size: '$ZONE_6' },
//         ZONE_7: { $size: '$ZONE_7' },
//         ZONE_8: { $size: '$ZONE_8' },
//       },
//       CMS_STATUS: {
//         ONLINE: { $size: '$ONLINE'},
//         OFFLINE: { $size: '$OFFLINE'},
//       },
//       DATA_CONN: [
//         {$size: "$WIFI"},
//         {$size: "$ETHERNET"},
//         {$size: "$BLUETOOTH"},
//       ],
//       BATT_COUNT: [{$size : '$BATT_COUNT'}],
//       DAY_MODE: [{$size : '$DAY_MODE'}],
//       NIGHT_MODE: [{ $size: '$NIGHT_MODE'}]
//     }
//   })
//   try{
//     const result = await Dashboard.aggregate(pipeline)
//     res.send(result[0] || {
//       ZONE: {},
//       CMS_STATUS: {},
//       DATA_CONN: {},
//       BATT_COUNT:[],
//       DAY_MODE: [],
//       NIGHT_MODE: [],
//     }).status(200)
//   }catch(err){
//     console.log(err);
//     res.send(err).status(500)
//   }
// }