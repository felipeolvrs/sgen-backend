const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db");

const Produto = sequelize.define(
  "Produto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false, 
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    localizacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagemUrl: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  },
  {

    timestamps: true, 
    underscored: true,
  }
);

module.exports = Produto;
