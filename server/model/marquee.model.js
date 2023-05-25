import mongoose from "mongoose";

const marquee = new mongoose.Schema({
  Title: String,
  Description: String,
  EndDate: Date,
})

marquee.set('versionKey', false);

export default mongoose.model('marquee', marquee);