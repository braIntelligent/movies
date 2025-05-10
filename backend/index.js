require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = process.env.OMDB_API_KEY;

app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).send({ error: "Falta parámetro 'q'" });

  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    res.json(response.data);
    
  } catch (err) {
    res.status(500).send({ error: "Error al consultar la API" });
  }
});
app.get('/api/movie/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener detalle de película' });
  }
});

app.listen(3001, () => console.log("Backend corriendo en http://localhost:3001"));

