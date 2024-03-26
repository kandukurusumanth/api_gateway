'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
// const CrudRepository = require('../repo/crudrepo');
const {server} = require('../config/index')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Role,{through: 'UserRole'})
    }
  }
  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: true, // Validate the email address format
      },
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        len:[4,50]
      }

    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) =>{
    const user_password=user.dataValues.password
    const saltrounds=server.SALT_ROUNDS;
    
    const hash = bcrypt.hashSync(user.dataValues.password,+saltrounds);
    user.dataValues.password=hash
      
      

      
  })
  return User;
};