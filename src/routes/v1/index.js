const express= require('express')
const router= express.Router();
const {infoController}= require('../../controllers')

const ariplaneRoutes= require('./airplane-route')
const cityRoutes= require('./city-route')
const airportRoutes= require('./airport-route')

const flightRoutes= require('./flight-route')

router.get('/info',infoController )

router.use('/airplane',ariplaneRoutes)

router.use('/city', cityRoutes)

router.use('/airport',airportRoutes)
router.use('/flight',flightRoutes )

module.exports= router;