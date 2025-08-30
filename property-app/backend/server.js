const express=require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app=express();
app.use(cors());
app.use(bodyParser.json());

const data_file = "./data.json";

app.get("/api/properties",(req,res)=>{
    const data=JSON.parse(fs.readFileSync(data_file));
    res.json(data.properties);
});

app.post("/api/properties",(req,res)=>{
    const data=JSON.parse(fs.readFileSync(data_file));
    const newProperty=
    {
        id:Date.now(),
        ...req.body
    };
    data.properties.push(newProperty);
    fs.writeFileSync(data_file,JSON.stringify(data,null,2));
    res.json(newProperty);
});

const port=5000;
app.listen(port,()=>{
    console.log("server is running");
});

