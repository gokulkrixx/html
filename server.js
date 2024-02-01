const express = require('express');
const app = express();
const userRoutes = require ('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const connect = require('./db/config');
dotenv.config();

//cors
app.use(cors());

//client
//app.use(express.static(_dirname + "/../client"));

//for parsing JSON datas in all endpoints
app.use(express.json());

app.use(userRoutes);

//Database connection
connect();

app.listen(process.env.PORT,()=>{
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
