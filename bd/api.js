const express = require('express');
const router = express.Router();
const { getDB } = require('./conexionMongoose');

// Ruta para obtener todos los elementos
router.get('/exercises', async (req, res) => {
  try {
    const db = getDB();
    const exercises = await db.collection('exercises').find().toArray();
    res.json(exercises);
  } catch (error) {
    console.error('Error al obtener los ejercicios', error);
    res.status(500).json({ error: 'Error al obtener los ejercicios' });
  }
});

// Ruta para crear un nuevo elemento
router.post('/ejercicios', async (req, res) => {
  try {
    const db = getDB();
    const newItem = req.body;
    await db.collection('ejercicios').insertOne(newItem);
    res.json(newItem);
  } catch (error) {
    console.error('Error al crear un nuevo ejercicio', error);
    res.status(500).json({ error: 'Error al crear un nuevo ejercicio' });
  }
});

module.exports = router;
