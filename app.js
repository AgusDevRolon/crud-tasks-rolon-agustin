import { startDB } from "./src/config/database.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());


app.use((req, res) => {
  res.status(200).json({ message: "API funcionando" });
});

startDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});