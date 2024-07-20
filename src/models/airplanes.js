'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplanes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airplanes.hasMany(models.flights, {
        foreignKey: 'airplaneId',
        onDelete: 'CASCADE'});
    }
  }
  Airplanes.init({
    airplaneName: DataTypes.STRING,
    airplaneNo:{
      type: DataTypes.STRING,
      unique: true
    },
    capacity: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 0,
      validate:{
        max: 500
      }
    }
  }, {
    sequelize,
    modelName: 'Airplanes',
  });
  return Airplanes;
};