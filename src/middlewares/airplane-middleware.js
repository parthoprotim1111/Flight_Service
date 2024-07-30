const {StatusCodes}= require('http-status-codes')
const {errorRes}= require('../utils/common')
const AppError= require('../utils/errors/app-error')

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        errorRes.message= 'Something went wrong while creating the airplane';
        errorRes.error= new AppError(["Airplane Model Number not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }

    if(!req.body.capacity){
        errorRes.message= 'Something went wrong while creating the airplane';
        errorRes.error= new AppError(["Airplane capacity not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }
    next()
}


module.exports= {
    validateCreateRequest
}