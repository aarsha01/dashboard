import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const users = new Schema({
  Username:String,
  Password:String,
  Email:String,
  Role:String,
})

users.set('versionKey', false);

export default mongoose.model('Users',users);