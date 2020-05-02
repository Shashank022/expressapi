require("dotenv").config();

const express = require("express");
const app = express();

app.get("/api",(req,resp)=> {
    resp.json({
        success : 1,
        message :"This is the call for the REST API"
    });

});

app.listen(process.env.APP_PORT,()=>{
    console.log("App is running on the PORT", process.env.APP_PORT);
    
});