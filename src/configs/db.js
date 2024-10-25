const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myproject', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });

module.exports = sequelize;
