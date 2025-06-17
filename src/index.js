const express = require("express");
const bodyParser = require("body-parser");
const CityRepository=require("./repository/city_repository");
// require('dotenv').config()

const { PORT } = require('./config/ServerConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');

const SetupandStartServer = async() => {

    //create express object
    // const PORT=3000;
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api', ApiRoutes);

    app.listen(PORT,() => {
        console.log(`Server started at port ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
    })

}

SetupandStartServer();