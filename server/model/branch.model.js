import mongoose from "mongoose";

const branch = new mongoose.Schema({
  Branch_Name: String,
  Code: String,
  Region: String,
  Hub: String,
  Vertical: String,
  Zone: String,
  State: String,
  District: String,
  City : String,
  Building_Name: String,
  Pin_Code: Number,
  Risk_Category: String,
  Branch_Locality: String,
  Post_Office: String,
  Mail_Address: String,
  Contact_Person: String,
  Mobile_Number: Number,
  Branch_Land_Phone: Number,
  Branch_Mobile: Number,
  Current_Status: String,
  Support_Type: String,
  Connectivity_Type : String,
})

branch.set('versionKey', false);

export default mongoose.model('Branch', branch);