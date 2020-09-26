'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.List);

      Task.hasOne(models.Metadata, {
        foreignKey: 'taskId'
      });

      Task.hasMany(models.Subtask, {
        foreignKey: 'taskId'
      });
    }
  };
  Task.init({
    title: DataTypes.STRING,
    order: DataTypes.INTEGER,
    checked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};