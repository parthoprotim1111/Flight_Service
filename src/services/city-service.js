const { StatusCodes } = require('http-status-codes');
const { cityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const City = new cityRepository();

async function createCity(data) {
    try {
        const city = await City.create(data);
        return city;
    } catch (error) {
        
        if (error.name == 'SequelizeValidationError' || error.name== 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new City object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCities() {
    try {
        const cities = await City.getAll();
        return cities;
    } catch (error) {
        throw new AppError("Cannot fetch data of all the Citites", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id){
    try {
        
        const city= await City.get(id);

        return city;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError("The city you requested is not found", error.statusCode)
        }
        throw new AppError("Cannot fetch data of the city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCity(id) {
    try {
        const response = await City.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError("The city you requested to delete is not found", error.statusCode)
        }
        throw new AppError("Cannot fetch data of the city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



async function updateCity(id, data) {
    try {
        const city = await City.update(id, data);
        return city;
    } catch(error) {

        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        else if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The City you requested to update is not present', error.statusCode);
        }

        throw new AppError('Cannot update the city object', StatusCodes.INTERNAL_SERVER_ERROR);

    }
}

module.exports={
    createCity,
    getCities,
    getCity,
    updateCity,
    deleteCity
}