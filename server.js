const express = require ('express');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT;
dotenv.config();


app.get('/test',(req,res,)=>{
    res.status("hello route");
})


app.listen(port,()=>{
    console.log(`Server listeing at http://localhost${process.env.PORT}`)
});