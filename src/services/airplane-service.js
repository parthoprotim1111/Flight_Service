const { StatusCodes } = require('http-status-codes');
const { airRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const Airplane = new airRepository();

async function createAirplane(data) {
    try {
        const airline = await Airplane.create(data);
        return airline;
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            throw new AppError("Cannot create a new Airplane object", StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new Airplane object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplanes = await Airplane.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError("Cannot fetch data of all the airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(id){
    try {
        
        const airplane= await Airplane.get(id);

        return airplane;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not found", error.statusCode)
        }
        throw new AppError("Cannot fetch data of the airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirplane(id) {
    try {
        const response = await Airplane.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested to delete is not found", error.statusCode)
        }
        throw new AppError("Cannot fetch data of the airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



async function updateAirplane(id, data){
    try {
        const airplane = await Airplane.update(id, data);
        return airplane;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("The airplane you requested to update is not present", error.statusCode);
        }
        throw new AppError("Cannot fetch data of the required airplanes", StatusCodes.NOT_FOUND);
    }

}



module.exports = {
    getAirplanes,
    createAirplane,
    getAirplane,
    deleteAirplane,
    updateAirplane
};
