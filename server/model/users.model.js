import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
const SALT_WORK_FACTOR = 10

const Schema = mongoose.Schema;

const users = new Schema({
  username:String,
  password:String,
  email:String,
  role:String,
})

users.set('versionKey', false);
users.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    console.log(this.password);
    this.password = await bcrypt.hashSync(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});
export default mongoose.model('Users',users);