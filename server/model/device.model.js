import mongoose from "mongoose";

const device = new mongoose.Schema({
  Device_ID: String,
  Date_of_Installation: Date,
  Warranty_Period: Date,
  Hardware_Version: String,
  Software_Version: String,
  IP_Address: String,
  Modem_IP: String,
  WIFI_SSID: String,
  Password : String,
  GSM_Number: Number,
  ZONE_1: String,
  ZONE_2: String,
  ZONE_3: String,
  ZONE_4: String,
  ZONE_5: String,
  ZONE_6: String,
  ZONE_7: String,
  ZONE_8: String,
  ZONE_9: String,
  ZONE_10: String,
  Last_Updated:Date,
  Branch_Name: String,
  Branch_Code: String,
})

device.set('versionKey', false);

export default mongoose.model('Device', device);