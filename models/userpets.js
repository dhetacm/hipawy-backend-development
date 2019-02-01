'use strict';
module.exports = (sequelize, DataTypes) => {
  const userPets = sequelize.define('userPets', {
    status: DataTypes.STRING
  }, {});
  userPets.associate = function(models) {
    // associations can be defined here
  };
  return userPets;
};