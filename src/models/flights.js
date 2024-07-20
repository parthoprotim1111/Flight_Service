'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplanes,{
        foreignKey: 'airplaneId'
      });

      this.belongsTo(models.Airports,{
        foreignKey: 'code'
      });

      this.belongsTo(models.Airports,{
        foreignKey: 'code'
      })

    }
  }
  flights.init({
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false
    
    },
    airplaneId: {
      type: DataTypes.STRING,
      allowNull: false
    
    },
    departureAirportId: {
      type: DataTypes.STRING,
      allowNull: false
    
    },
    arrivalAirportId: {
      type: DataTypes.STRING,
      allowNull: false
    
    },
    arrivalTime: {
      type: DataTypes.DATE,
      allowNull: false
      

    
    },
    departureTime: {
      type: DataTypes.DATE,
      allowNull: false
    
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    
    },
    totalSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    
    }
  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};