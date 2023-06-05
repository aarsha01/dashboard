import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const users = new Schema({
  username:String,
  password:String,
  email:String,
  role:String,
})

users.set('versionKey', false);

export default mongoose.model('Users',users);