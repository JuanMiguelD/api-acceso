const { Sequelize } = require("sequelize");
require("dotenv").config();

// Configurar conexión a la base de datos
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false, // Desactiva logs de SQL (opcional)
});

module.exports = sequelize;
