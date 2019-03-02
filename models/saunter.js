// ----------------- this be our DB Model ------------------------

"use strict";

module.exports = function(sequelize, DataTypes){
  var Saunter = sequelize.define('saunterer',{
    client_name:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dogs_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dog_breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dog_age: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
   return Saunter;
  };