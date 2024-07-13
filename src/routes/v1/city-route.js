const express= require('express');
const router= express.Router();

const {createCityController} = require('../../controllers')
const {CityMiddleware}=require('../../middlewares')


router.post('/',CityMiddleware.validateCreateRequest,createCityController.createCity)

router.get('/',createCityController.getCities)
router.get('/:id',createCityController.getCity)

router.delete('/:id',createCityController.deleteCity)
router.patch('/:id', createCityController.updateCity)


module.exports= router;