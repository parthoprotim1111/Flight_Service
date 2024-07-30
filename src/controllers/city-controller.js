const {CityService}= require('../services');

const {successRes, errorRes}= require('../utils/common');
const {StatusCodes}= require('http-status-codes');




async function createCity(req,res){
    try {
        const city= await CityService.createCity({
            name: req.body.name
            
        });

        successRes.data=city;
        return res
        .status(StatusCodes.CREATED)
        .json(successRes)
    } catch (error) {
        errorRes.error=error;
        
        return res
        .status(error.statusCode)
        .json(errorRes);
        
    }
}

async function getCities(req,res){
    try {
        const city= await CityService.getCities();
        successRes.data=city;
        return res
        .status(StatusCodes.OK)
        .json(successRes)
    } catch (error) {
        errorRes.error=error;
        
        return res
        .status(error.statusCode)
        .json(errorRes);
        
    }
}

async function getCity(req,res){
    try {

        const city= await CityService.getCity(req.params.id);
        successRes.data=city;
        return res
        .status(StatusCodes.OK)
        .json(successRes)
    } catch (error) {
        errorRes.error=error;
        
        return res
        .status(error.statusCode)
        .json(errorRes);
         
    }

}


async function deleteCity(req,res){
    try {

        const city= await CityService.deleteCity(req.params.id);
        successRes.data=city;
        return res
        .status(StatusCodes.OK)
        .json(successRes)
    } catch (error) {
        errorRes.error=error;
        return res
        .status(error.statusCode)
        .json(errorRes);
        
        
    }

}

async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id, {
            name: req.body.name,
            cityCode: req.body.cityCode
        });
        successRes.data = city;
        return res
                .status(StatusCodes.CREATED)
                .json(successRes);
    } catch(error) {
        errorRes.error = error;
        return res
                .status(error.statusCode)
                .json(errorRes);
    }
}



module.exports={
    createCity,
    getCities,
    getCity,
    deleteCity,
    updateCity
}