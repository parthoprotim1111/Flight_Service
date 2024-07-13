
const {AirplaneService}= require('../services');

const {successRes, errorRes}= require('../utils/common');
const {StatusCodes}= require('http-status-codes');




async function createAirplane(req,res){
    try {
        const airplane= await AirplaneService.createAirplane({
            airplaneName: req.body.airplaneName,
            airplaneNo: req.body.airplaneNo,
            capacity: req.body.capacity
        });

        successRes.data=airplane;
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

async function getAirplanes(req,res){
    try {
        const airplane= await AirplaneService.getAirplanes();
        successRes.data=airplane;
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

async function getAirplane(req,res){
    try {

        const airplane= await AirplaneService.getAirplane(req.params.id);
        successRes.data=airplane;
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


async function deleteAirplane(req,res){
    try {

        const airplane= await AirplaneService.deleteAirplane(req.params.id);
        successRes.data=airplane;
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
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane
};