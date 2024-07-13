const express= require('express');
const router= express.Router();

const {AirplaneMiddleware}= require('../../middlewares')

const {createAirplaneController}= require('../../controllers');

router.post('/',AirplaneMiddleware.validateCreateRequest ,createAirplaneController.createAirplane);

router.get('/',createAirplaneController.getAirplanes);

module.exports= router;