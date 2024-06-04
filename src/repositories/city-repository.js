const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
    async createCity ( { name } ) {
        try {
            const city = await City.create( {name} );
            return city;
        }
        catch (error) {
            console.log("Error in Repository layer");
            throw {error};
        }
    }

    async deleteCity ( cityId ) {
        try {
            const city = await City.findByPk(cityId);
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return city;
        }
        catch (error) {
            console.log("Error in Repository layer");
            throw {error};
        }
    }
    
    async updateCity (cityId, data) {
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            // return city;
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city; 
        }
        catch (error) {
            console.log("Error in Repository layer");
            throw {error};
        }
    }

    async getCity (id) {
        try {
            const city = await City.findByPk(id);
            return city;
        }
        catch (error) {
            console.log("Error in Repository layer");
            throw {error};
        }
    }

    // async allCity() {
    //     try {
    //         const city = await City.findAll();
    //         return city;
    //     }
    //     catch (error) {
    //         console.log("Error in Repository layer");
    //         throw(error);
    //     }
    // }
    // NO NEED ANYMORE AS IT IS CLUBBED BELOW WITH STARTS WUTH PARAMETER IN ELSE CODITION

    async allCity(filter) {
        try {
            if (filter.name) { // if filter exist else return all
                const cities = await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return cities;
            } else {
                const city = await City.findAll();
                return city;    
            }
        }
        catch (error) {
            console.log("Error in Repository layer");
            throw (error)
        }
    }
}

module.exports = CityRepository;