const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
// const CityRepository = require('./repositories/city-repository');

const setupAndStartServer = async () => {
    
    // create the express object
    
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(PORT, () => {
        console.log(`Server Started at ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({name: "New Delhi"});
    });
}
 

setupAndStartServer();

