const { StatusCodes } = require('http-status-codes');
const { flightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {Op}= require('sequelize')

const Flights = new flightRepository();

async function createFlight(data) {
    try {
        const flight = await Flights.create(data);
        return flight;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new flight object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query){

    let customFilter= {};
    let sortFilter={};

    if(query.trips){
        [departureAirportId,arrivalAirportId]=query.trips.split('-');
        customFilter.departureAirportId=departureAirportId;
        customFilter.arrivalAirportId=arrivalAirportId;
        console.log(customFilter)
    }

    if(query.price){
        [minPrice,maxPrice]=query.price.split('-');
        customFilter.price={
            [Op.between]:[minPrice,(maxPrice==undefined) ? 20000: maxPrice]
        }
    }

    if(query.travellers){
        customFilter.totalSeats={
            [Op.gte]:query.travellers
        }
    }
    if(query.tripTime){
        customFilter.departureTime={
            [Op.between]:[query.tripTime,query.tripTime+"23:59:59"]
        }
    }
    if(query.sort){
        const params= query.sort.split(',')
        const sortFilters= params.map((para)=>para.split('_'))
        sortFilter=sortFilters
    }

    try {
        const flights= await Flights.getAllFlights(customFilter,sortFilter)
        return flights;
        
    }  catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot get the Flights", StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function getFlight(id){
    try {
        const flight= await Flights.get(id);
        return flight;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot get the Flight", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateSeats(data){
    try {
        const response= await Flights.updateRemainingSeats(data.flightId,data.seats,data.dec);
        return response
    } catch (error) {
        throw new AppError("Cannot update seats of the Flight", StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
}


module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
};
