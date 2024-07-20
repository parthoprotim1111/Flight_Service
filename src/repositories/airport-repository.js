const crudRepository= require('./crud-repository')

const { Airports }= require('../models')


class airportRepository extends crudRepository{
    constructor(){
        super(Airports)
    }
}


module.exports= airportRepository;