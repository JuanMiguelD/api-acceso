require("dotenv").config();
const serverless = require('serverless-http');
const express = require("express");
const cors = require("cors");
const { sequelize, initDatabase } = require("./src/config/database");
const authRoutes = require("./src/routes/user.routes");

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  await initDatabase(); // Inicializar base de datos
})();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api", authRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "Hola Mundo serverless" });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
