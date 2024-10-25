const { DataTypes } = require("sequelize");
const sequelize = require("../../configs/db");

const Pedido = sequelize.define("Pedido", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataPedido: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
  items: {
    type: DataTypes.JSON, 
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  metodoPagamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Pendente",
  },
  enderecoEntrega: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  frete: {
    type: DataTypes.FLOAT,
    allowNull: true, 
  },
  observacoes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Pedido;
