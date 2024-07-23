
const {FlightService}= require('../services');

const {successRes, errorRes}= require('../utils/common');
const {StatusCodes}= require('http-status-codes');




async function createFlight(req,res){
    try {
        const flight= await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            totalSeats: req.body.totalSeats
        });

        successRes.data=flight;
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

async function getAllFlights(req,res){
    try {
        const flights= await FlightService.getAllFlights(req.query)

        successRes.data=flights;
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


module.exports= {
    createFlight,
    getAllFlights
};