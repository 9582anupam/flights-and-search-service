'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.hasManyhasMany(models.Airport, {
            foreignKey : 'cityId'
      });
    }
  }
    City.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};