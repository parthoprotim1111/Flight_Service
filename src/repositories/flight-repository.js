const {Sequelize}= require('sequelize')

const crudRepository= require('./crud-repository')

const { Flights, Airplanes, Airports, cities}= require('../models')

const db= require('../models')


class flightRepository extends crudRepository{
    constructor(){
        super(Flights)
    }

    async getAllFlights(filter,sort){
        console.log("Inside repo", filter,'Sort=>', sort)

        const defaultSort = [['createdAt', 'ASC']];

        const isEmptySort = !sort || (Object.keys(sort).length === 0 && sort.constructor === Object);

        const sorting = isEmptySort ? defaultSort : sort;
       

        const res= await Flights.findAll({
            where: filter,
            order: sorting,
            include: [
                {
                    model: Airplanes,
                    required: true,
                    as: 'airplaneDetail',
                },
                {
                    model: Airports,
                    required: true,
                    as: 'departureAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flights.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                    },
                    include: {
                        model: cities,
                        required: true
                    }
                },
                {
                    model: Airports,
                    required: true,
                    as: 'arrivalAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flights.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                    },
                    include: {
                        model: cities,
                        required: true
                    }
                }
            ]
        });
        console.log(res)
        
        return res;

    }

    async updateRemainingSeats(flightId,seats,dec=true){

        await db.sequelize.query(`SELECT * from Flights WHERE Flights.id = ${flightId} FOR UPDATE;`);

        const flight= await Flights.findByPk(flightId)
        if (parseInt(dec)) {
            await flight.decrement('availabeSeats',{by:seats});     
            
        } else {
            await flight.increment('availabeSeats',{by:seats});   
            
        }
        return flight;

    }
}


module.exports= flightRepository;