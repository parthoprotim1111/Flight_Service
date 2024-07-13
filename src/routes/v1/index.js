const express= require('express')
const router= express.Router();
const {infoController}= require('../../controllers')

const ariplaneRoutes= require('./airplane-route')
const cityRoutes= require('./city-route')

router.get('/info',infoController )

router.use('/airplane',ariplaneRoutes)

router.use('/city', cityRoutes)

module.exports= router;