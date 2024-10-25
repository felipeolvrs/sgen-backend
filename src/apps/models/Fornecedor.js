const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db");

const Fornecedor = sequelize.define("Fornecedor", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  tempoEntrega: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unidadesParaDesconto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valorDesconto: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Fornecedor;
