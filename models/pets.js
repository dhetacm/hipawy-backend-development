'use strict';
module.exports = (sequelize, DataTypes) => {
  const pets = sequelize.define('pets', {
    name: DataTypes.STRING,
    category: DataTypes.ENUM('cat', 'dog'),
    breed: DataTypes.STRING,
    age: DataTypes.STRING,
    address: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female'),
    photo: DataTypes.STRING,
    health: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {});
  pets.associate = function(models) {
    // associations can be defined here
  };
  return pets;
};