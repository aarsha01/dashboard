import Dashboard from '../model/data.model.js'
import Branch from '../model/branch.model.js'
import Device from '../model/device.model.js'

async function fetchData(req,res){
  try{
    const result = await Dashboard.aggregate([
      {
        $group: {
          _id: null,
          ZONE_1: { $addToSet: { $cond: [{ $eq: ['$ZONE_1', 1] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
          ZONE_2: { $addToSet: { $cond: [{ $eq: ['$ZONE_2', 1] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
          ZONE_3: { $addToSet: { $cond: [{ $eq: ['$ZONE_3', 1] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
          ZONE_4: { $addToSet: { $cond: [{ $eq: ['$ZONE_4', 1] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
          ZONE_5: { $addToSet: { $cond: [{ $eq: ['$ZONE_5', 1] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
          ZONE_6: { $addToSet: { $cond: [{ $eq: ['$ZONE_6', 1] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
          ZONE_7: { $addToSet: { $cond: [{ $eq: ['$ZONE_7', 1] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
          ZONE_8: { $addToSet: { $cond: [{ $eq: ['$ZONE_8', 1] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } }
        }
      },
      {
        $project: {
          _id: 0,
          ZONE_1: { $size: '$ZONE_1' },
          ZONE_2: { $size: '$ZONE_2' },
          ZONE_3: { $size: '$ZONE_3' },
          ZONE_4: { $size: '$ZONE_4' },
          ZONE_5: { $size: '$ZONE_5' },
          ZONE_6: { $size: '$ZONE_6' },
          ZONE_7: { $size: '$ZONE_7' },
          ZONE_8: { $size: '$ZONE_8' }
        }
      }
    ])
    res.send(result).status(200)
  }catch(err){
    res.send(err).status(500)
  }
}
async function fetchBatmodeData(req, res) {
  try {
    const result2 = await Dashboard.find({Battery_Mode: {$lt:11.3}}).distinct('mac_id')
    res.send([result2.length]).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
}
async function fetchdayData(req, res) {
  try {
    const result2 = await Dashboard.find({Op_Mode: {$in:['Day','day','d']}}).distinct('mac_id')
    res.send([result2.length]).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
}
async function fetchnightData(req, res) {
  try {
    const result2 = await Dashboard.find({Op_Mode: {$in:['Night','night','n']}}).distinct('mac_id')
    res.send([result2.length]).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
}

async function fetchDataPie(req, res) {
  try {
    const result = await Dashboard.aggregate([
      {
        $group: {
          _id: null,
          ONLINE:  { $addToSet: { $cond: [{ $eq: ['$CMS_status', "online" ] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
          OFFLINE: { $addToSet: { $cond: [{ $eq: ['$CMS_status', "offline"] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } }
        }
      },
      {
        $project: {
          _id: 0,
          ONLINE:  { $size: '$ONLINE' },
          OFFLINE: { $size: '$OFFLINE' }
        }
      }
    ])
    res.send(result).status(200)
  } catch (err) {
    res.send(err).status(500)
  }
}

async function fetchDataConn(req, res) {
  try {
      const result = await Dashboard.aggregate([
          {
              $group: {
                  _id: null,
                  WIFI:     { $addToSet: { $cond: [{ $eq: ['$Net_Con', "wifi"] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
                  ETHERNET: { $addToSet: { $cond: [{ $eq: ['$Net_Con', "eth0"] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } },
                  BLUETOOTH: { $addToSet: { $cond: [{ $eq: ['$Net_Con', "bluetooth"] }, '$mac_id', { $ifNull: [null, '$$REMOVE'] }] } }
              }
          },
          {
              $project: {
                _id: 0,
                data: [
                  {$size: "$WIFI"},
                  {$size: "$ETHERNET"},
                  {$size: "$BLUETOOTH"},
                ]}
          }
      ])
      res.send(result[0]?.data).status(200)
  } catch (err) {
      res.send(err).status(500)
  }
}

async function Graphdetails(req, res) {
  try {
    const { key, value } = req.body;
  
    const mac_ids = await Dashboard.find({ [key]: value }).distinct('mac_id');
    const datas = []
    Promise.all(mac_ids.map(async id=>{
      const doc = await Dashboard.findOne({  mac_id: id });
      datas.push(doc)
    }))

 
    //console.log(result)
    //data extracted for devices collection
    const devices = await Device.find({ Device_ID: { $in: mac_ids } });
   
    const branchCodes = devices.map(item => item.Branch_Code);
    // Branch Detailes from branch collection
    const branches = await Branch.find({ Code: { $in: branchCodes } });
    //console.log(branches);
  

    res.json({devices,branches,datas}).status(200);
  } catch (err) {
    res.send(err).status(500);
    console.log(err)
  }
}

export {
  fetchData,
  fetchBatmodeData,
  fetchdayData,
  fetchDataPie,
  fetchDataConn,
  fetchnightData,
  Graphdetails

  }