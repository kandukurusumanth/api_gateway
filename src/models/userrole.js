'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  UserRole.init({
    UserId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'Users',
        key:'id'
      }
      
    },
    RoleId:{ 
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'Roles',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'UserRole',
  });
  return UserRole;
};