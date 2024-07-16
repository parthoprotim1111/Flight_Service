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
      flights.belongsTo(models.Airplanes,
        { foreignKey:'flightName',
          onDelete: 'cascade',
          onUpdate: 'cascade'
      })
    }
  }
  flights.init({
    flightName:{ 
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Departure:{ 
      type:DataTypes.STRING,
      allowNull:false
    },
    Arrival: {
      type:DataTypes.STRING,
      allowNull:false
    },
    
    Date: {
    type: DataTypes.DATE,
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'flights',
  });
  return flights;
};