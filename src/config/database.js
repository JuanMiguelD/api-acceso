const { Sequelize } = require("sequelize");
require("dotenv").config();

// Conexión a MySQL sin base de datos (para crearla si no existe)
const sequelizeInit = new Sequelize("", process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
});

// Conexión a la base de datos real
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
});

const initDatabase = async () => {
  try {
    // Crear la base de datos si no existe
    await sequelizeInit.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    console.log(`✅ Base de datos '${process.env.DB_NAME}' verificada o creada.`);
    await sequelizeInit.close();

    // Verificar conexión
    await sequelize.authenticate();
    console.log("✅ Conexión establecida con MySQL");

    // Sincronizar modelos
    await sequelize.sync({ alter: true });
    console.log("📦 Base de datos sincronizada");
  } catch (error) {
    console.error("❌ Error al conectar la base de datos:", error);
  }
};

// Exportar sequelize pero inicializar primero la BD antes de que los modelos lo usen
module.exports = { sequelize, initDatabase };
