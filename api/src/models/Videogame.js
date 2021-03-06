const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description_raw: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    plataformas: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lanzamiento: {
      type: DataTypes.DATE,
    },
    rating:{
      type: DataTypes.STRING
    }

  });
};
