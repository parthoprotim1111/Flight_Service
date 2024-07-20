const {StatusCodes}= require('http-status-codes')
const {errorRes}= require('../utils/common')
const AppError= require('../utils/errors/app-error')

function validateCreateRequest(req,res,next){
    if(!req.body.code){
        errorRes.message= 'Something went wrong while creating the airport';
        errorRes.error= new AppError(["Airport Number not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }
    if(!req.body.name){
        errorRes.message= 'Something went wrong while creating the airport';
        errorRes.error= new AppError(["Airport name not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }

    if(!req.body.address){
        errorRes.message= 'Something went wrong while creating the airport';
        errorRes.error= new AppError(["Airport address not found in the incoming request in the correct format"],StatusCodes.BAD_REQUEST)
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorRes)
    }
    next()
}


module.exports= {
    validateCreateRequest
}