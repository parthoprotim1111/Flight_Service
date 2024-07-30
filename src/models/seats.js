'use strict';
const {
  Model
} = require('sequelize');

const {seat_type}= require('../utils/common')
const {BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS}= seat_type.Seat_Type;
module.exports = (sequelize, DataTypes) => {
  class Seats extends Model {
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

    }
  }
  Seats.init({
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    row: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    col: {
      type:DataTypes.STRING,
      allowNull: false
    },
    type: {
      type:DataTypes.ENUM,
      values: [BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
      defaultValue: ECONOMY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Seats',
  });
  return Seats;
};