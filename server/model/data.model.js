import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const dashboard = new Schema({
  mac_id:String,
  Date_time: Date,
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
  Z1_bp: Number,
  Z2_bp: Number,
  Z3_bp: Number,
  Z4_bp: Number,
  Z5_bp: Number,
  Z6_bp: Number,
  Z7_bp: Number,
  Z8_bp: Number,
  Op_Mode: String,
  Bat_Voltage: Number,
})

dashboard.set('versionKey', false);

export default mongoose.model('Dashboard', dashboard);