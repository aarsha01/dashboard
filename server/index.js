import express from 'express'
//import dotenv from 'dotenv'
import bodyParser from "body-parser";
import connectDB from './db.js'
import DataRoute from './route/data.route.js'
import BranchRoute from './route/branch.route.js'
import DeviceRoute from './route/device.route.js'
import marqueeroute from './route/marqueeroute.js'
import zoneroute from './route/devicedetails.route.js'
import userroute from './route/user.route.js'
import initPassport from './passport.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import cors from 'cors'
import { Server } from 'socket.io';
import { checkAlarm } from './controller/data.controller.js';

const PORT = 3001;

const app = express();

app.use(cors());

// giving before bodyparser to get raw data


app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));

// passport setup
initPassport()


// creating session and adding to passport
app.use(session({
  secret: 'super secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://dheeraj:dj%40mongo1415@cluster0.kafuosd.mongodb.net/database?retryWrites=true&w=majority' })
}));
app.use(passport.authenticate('session'));




app.listen(PORT, async () => {
  await connectDB();
  const io = new Server(3002)
  setInterval(async () => {
    const data = await checkAlarm();
    console.log("Alarm triggered!");
    io.emit('alarm',data)
  }, 5000)

  console.log(`Server listening on http://localhost:${PORT}`);
});
app.use('/api/data', DataRoute)
app.use('/api/branch', BranchRoute)
app.use('/api/device', DeviceRoute)
app.use('/api/marquee', marqueeroute)
app.use('/api/zone', zoneroute)
app.use('/api/user', userroute)







