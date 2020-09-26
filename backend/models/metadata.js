'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Metadata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Metadata.belongsTo(models.Task);
    }
  };
  Metadata.init({
    create_date: DataTypes.DATE,
    edited_date: DataTypes.DATE,
    creator_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Metadata',
  });
  return Metadata;
};