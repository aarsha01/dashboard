import Dashboard from '../model/data.model.js'

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

export {
  fetchData
}