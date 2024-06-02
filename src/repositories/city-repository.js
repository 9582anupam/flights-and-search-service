const { City } = require("../models/index")


class CityRepository {
    async createCity ( { name } ) {
        try {
            const city = await City.create( {name} );
            return city;
        }
        catch (error) {
            console.log(error)
        }
    }

    async deleteCity ( cityId ) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }
        catch (error) {
            console.log(error)
        }
    }
    
    async updateCity (cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        }
        catch (error) {
            console.log(error)
        }
    }

    async getCity () {
        try {
            const city = await City.findAll();
            return city;
        }
        catch (error) {
            console.log(error)
        }
    }
}

module.exports = CityRepository;