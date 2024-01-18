const express = require('express');
const app = express();
let {MongoClient} = require ('mongodb')
let dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT;

const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('ums');
const collection = db.collection("users");


app.get('/test',(req,res, next)=>{
    // res.status(200).send("success");
    next();
},(req,res,next)=>{
  next();
},(req,res) =>{
  console.log("sucess2");
  res.status(200).send("sucess2");
});

console.log("__dirname : ",__dirname);
app.use('/',express.static(__dirname + '/client'));
app.use(express.urlencoded({extended : false}));// to  parse from datas
app.use(express.json());//to parse json datas


app.post('/submit',async (req,res)=>{
  let data = req.body;
  console.log("data :",data);

    // console.log("reached here");
    // console.log("req body : ",req.body);

    await collection.insertOne(req.body)
          .then((message)=> {
            console.log("document inserted succesfully");
            res.status(201).send("success");
          })
          .catch((error) => {
            console.log("document insertion failed : ", error);
            res.status(400).send("failed")
          })
        })

        


async function connect() {

    await client.connect()
    .then((message)=> {
      console.log("Database connection established");
    })
    .catch((error)=> {
      console.log("Database not connected");
      console.log("Database error : ", error.message?error.message:error);
    })
    .finally(()=>{
      app.listen(port, ()=>{
        console.log(`server running at http://localhost:5000`);
      })
    });
  }
  
  connect();


