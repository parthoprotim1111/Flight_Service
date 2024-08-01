const express= require('express');
const router= express.Router();

const {FlightMiddleware}= require('../../middlewares')

const {createFlightController}= require('../../controllers');

router.post('/',FlightMiddleware.validateCreateRequest ,createFlightController.createFlight);

router.get('/',createFlightController.getAllFlights)

router.get('/:id',createFlightController.getFlight)

router.patch('/:id/seats',FlightMiddleware.validateUpdateSeat ,createFlightController.updateSeat);


module.exports= router;