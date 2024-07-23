const express= require('express');
const router= express.Router();

const {FlightMiddleware}= require('../../middlewares')

const {createFlightController}= require('../../controllers');

router.post('/',FlightMiddleware.validateCreateRequest ,createFlightController.createFlight);

router.get('/',createFlightController.getAllFlights)

module.exports= router;