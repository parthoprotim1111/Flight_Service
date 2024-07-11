const crudRepository= require('./crud-repository')

const { Airplanes }= require('../models')


class airRepository extends crudRepository{
    constructor(){
        super(Airplanes)
    }
}


module.exports= airRepository;