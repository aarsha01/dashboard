import express from 'express'
//import dotenv from 'dotenv'
import bodyParser from "body-parser";
import connectDB from './db.js'
import DataRoute from './route/data.route.js'



const PORT = 3001;

const app = express();
connectDB();

// giving before bodyparser to get raw data


app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));


// handling routes



app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

app.use('/api/data', DataRoute)