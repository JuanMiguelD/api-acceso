require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Permite recibir JSON en requests
app.use(cors()); // Habilita CORS

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🚀" });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
