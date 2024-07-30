
const {AirportService}= require('../services');

const {successRes, errorRes}= require('../utils/common');
const {StatusCodes}= require('http-status-codes');




async function createAirport(req,res){
    try {
        const airport= await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });

        successRes.data=airport;
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

async function getAirports(req,res){
    try {
        const airports= await AirportService.getAirports();
        successRes.data=airports;
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

async function getAirport(req,res){
    try {

        const airport= await AirportService.getAirport(req.params.id);
        successRes.data=airport;
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


async function deleteAirport(req,res){
    try {

        const airport= await AirportService.deleteAirport(req.params.id);
        successRes.data=airport;
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

async function updateAirport(req,res){
    try {
        const airport= await AirportService.updateAirport(req.params.id,{
            name: req.body.name,
            code: req.body.code,
            address: req.body.address

        });
        successRes.data=airport;
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



module.exports= {
    createAirport,
    getAirport,
    getAirports,
    deleteAirport,
    updateAirport
};