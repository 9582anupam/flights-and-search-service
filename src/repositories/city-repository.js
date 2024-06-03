const { City } = require("../models/index")


class CityRepository {
    async createCity ( { name } ) {
        try {
            const city = await City.create( {name} );
            return city;
        }
        catch (error) {
            console.log(error);
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
            console.log(error);
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
            console.log(error);
            throw {error};
        }
    }

    async getCity (id) {
        try {
            const city = await City.findByPk(id);
            return city;
        }
        catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async allCity() {
        try {
            const city = await City.findAll();
            return city;
        }
        catch (error) {
            console.log(error);
            throw(error);
        }
    }
}

module.exports = CityRepository;