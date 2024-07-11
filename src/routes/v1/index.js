const express= require('express')
const router= express.Router();
const {infoController}= require('../../controllers')

const ariplaneRoutes= require('./airplane-route')

router.get('/info',infoController )

router.use('/airplane',ariplaneRoutes)

module.exports= router;