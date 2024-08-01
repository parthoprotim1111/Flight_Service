
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
            availabeSeats: req.body.availabeSeats
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

async function getFlight(req,res){
    try {

        const flight= await FlightService.getFlight(req.params.id);
        successRes.data=flight;
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

async function updateSeat(req,res){
    try {
        const response= await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats,
            dec: req.body.dec
        })

        successRes.data=response;
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
    createFlight,
    getAllFlights,
    getFlight,
    updateSeat
};