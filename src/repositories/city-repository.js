const crudRepository= require('./crud-repository')

const { cities }= require('../models')


class cityRepository extends crudRepository{
    constructor(){
        super(cities)
    }
}


module.exports= cityRepository;