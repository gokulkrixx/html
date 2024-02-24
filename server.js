const express = require ('express');
const app = express();
const port = process.env.PORT;
dotenv.config();


app.get('/test',(req,res,)=>{
    res.status(200).send("sucess");
})
