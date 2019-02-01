"use strict";
module.exports = (sequelize, DataTypes) => {
  const userPets = sequelize.define(
    "userPets",
    {
      status: DataTypes.STRING
    },
    {}
  );
  userPets.associate = function(models) {
    models.userPets.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: { name: id_user, allowNull: false },
      targetKey: "id"
    });
    models.userPets.belongsTo(models.pets, {
      onDelete: "CASCADE",
      foreignKey: { name: id_pet, allowNull: false },
      targetKey: "id"
    });
  };
  return userPets;
};
