import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const dashboard = new Schema({
  mac_id:String,
  Date_time: String,
  CMS_status: String,
  Net_Con: String,
  ZONE_1: Number,
  ZONE_2: Number,
  ZONE_3: Number,
  ZONE_4: Number,
  ZONE_5: Number,
  ZONE_6: Number,
  ZONE_7: Number,
  ZONE_8: Number,
  Op_Mode: String,
  Bat_Voltage: Number
})

dashboard.set('versionKey', false);

export default mongoose.model('Dashboard', dashboard);