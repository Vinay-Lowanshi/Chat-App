const sequelize=require('../connect')

const {DataTypes } = require('sequelize');
const User = sequelize.define('User', {
  // Model attributes are defined here
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Phone:{
    type :DataTypes.BIGINT(10),
    allowNull: false
  },
  Password:{
    type :DataTypes.VIRTUAL ,
    allowNull: false
  }
}, {
  // Other model options go here
});

console.log(User === sequelize.models.User); // true

module.exports=User