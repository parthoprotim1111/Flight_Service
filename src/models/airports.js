'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airports.belongsTo(models.City, { foreignKey: 'code', targetKey: 'cityCode' });
      
    }
  }
  Airports.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    code: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airports',
  });
  return Airports;
};