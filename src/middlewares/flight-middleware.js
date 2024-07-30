const {StatusCodes}= require('http-status-codes')
const {errorRes}= require('../utils/common')
const AppError= require('../utils/errors/app-error')

const dateCheck= require('../utils/helpers/datetime-helper')


function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        errorRes.message= 'Something went wrong while creating the flight';
        errorRes.error= new AppError(["Flight Number not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }
    if(!req.body.airplaneId){
        errorRes.message= 'Something went wrong while creating the flight';
        errorRes.error= new AppError(["Airplane Id not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }

    if(!req.body.departureAirportId){
        errorRes.message= 'Something went wrong while creating the flight';
        errorRes.error= new AppError(["departureAirportId not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }

    if(!req.body.arrivalAirportId){
        errorRes.message= 'Something went wrong while creating the flight';
        errorRes.error= new AppError(["arrivalAirportId not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }

    if(!req.body.arrivalTime){
        errorRes.message= 'Something went wrong while creating the flight';
        errorRes.error= new AppError(["Arrival time not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }


    if(!req.body.departureTime){
        errorRes.message= 'Something went wrong while creating the flight';
        errorRes.error= new AppError(["Departure time not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }

    if(!req.body.price){
        errorRes.message= 'Something went wrong while creating the flight';
        errorRes.error= new AppError(["Price not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }

    if(!req.body.availabeSeats){
        errorRes.message= 'Something went wrong while creating the flight';
        errorRes.error= new AppError(["Seats not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }

    if(!dateCheck(req.body.arrivalTime,req.body.departureTime)){
        errorRes.message= 'Something went wrong while creating the flight';
        errorRes.error= new AppError(["Correct the Departure and Arrival time"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)

    }




    next()
}


module.exports= {
    validateCreateRequest
}