// ----------------- this be our dog DB Model ------------------------

"use strict";

module.exports = function(sequelize, DataTypes){
  var Human = sequelize.define('human',{
    human_name:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    human_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    human_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // createdAt: false,
    // updatedAt: false,
    });
   return Human;
  };