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

module.exports = {
    getAirplanes,
    createAirplane
};
