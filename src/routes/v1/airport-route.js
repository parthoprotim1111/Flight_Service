const express= require('express');
const router= express.Router();

const {AirportMiddleware}= require('../../middlewares')

const {createAirportController}= require('../../controllers');

router.post('/',AirportMiddleware.validateCreateRequest ,createAirportController.createAirport);

router.get('/',createAirportController.getAirports);

router.get('/:id',createAirportController.getAirport);

router.delete('/:id', createAirportController.deleteAirport);

router.patch('/:id',createAirportController.updateAirport)

module.exports= router;