const express = require("express");
// require('dotenv').config()
const { PORT } = require('./config/ServerConfig');

const SetupandStartServer = async() => {
    //create express object
    const app=express();
    // const PORT=3000;
    app.listen(PORT,() => {
        console.log(`Server started at port ${PORT}`);
    })
}

SetupandStartServer();