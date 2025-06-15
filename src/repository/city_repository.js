const { City }= require('../models/index');

class CityRepository{
    async createCity({ name }){
        try{
            const city= await City.create({name});
            return city;
        }
        catch(error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
    async deleteCity({ cityid }){
        try{
            await City.destroy({
                where: {
                    id: cityid
                }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
    async getCity(cityId){
        try {
            const city= await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
    async updateCity(cityId,data){
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            // Difference between both mentioned ways is that above mentioned way doesn't return updated object
            const city = await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
}
module.exports=CityRepository;