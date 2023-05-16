import express from 'express'
//import dotenv from 'dotenv'
import bodyParser from "body-parser";
import connectDB from './db.js'



const PORT = 3001;

const app = express();
connectDB();

// giving before bodyparser to get raw data


app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));





app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});