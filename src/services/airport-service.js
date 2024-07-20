const { StatusCodes } = require('http-status-codes');
const { airportRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const Airport = new airportRepository();

async function createAirport(data) {
    try {
        const airport = await Airport.create(data);
        return airport;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new Airport object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {
    try {
        const airport = await Airport.getAll();
        return airport;
    } catch (error) {
        throw new AppError("Cannot fetch data of all the airports", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try {
        
        const airport= await Airport.get(id);

        return airport;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested is not found", error.statusCode)
        }
        throw new AppError("Cannot fetch data of the airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirport(id) {
    try {
        const response = await Airport.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested to delete is not found", error.statusCode)
        }
        throw new AppError("Cannot fetch data of the airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



async function updateAirport(id, data){
    try {
        const airport = await Airport.update(id, data);
        return airport;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("The airport you requested to update is not present", error.statusCode);
        }
        throw new AppError("Cannot fetch data of the required airport", StatusCodes.NOT_FOUND);
    }

}



module.exports = {
    getAirport,
    createAirport,
    getAirports,
    deleteAirport,
    updateAirport
};
