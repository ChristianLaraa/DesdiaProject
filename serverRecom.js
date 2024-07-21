// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/ratingDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Esquema y Modelo
const ratingSchema = new mongoose.Schema({
    value: Number
});
const Rating = mongoose.model('Rating', ratingSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para guardar la calificación
app.post('/rate', (req, res) => {
    const ratingValue = req.body.value;

    const newRating = new Rating({
        value: ratingValue
    });

    newRating.save((err) => {
        if (err) {
            res.status(500).send('Error al guardar la calificación');
        } else {
            res.status(200).send('Calificación guardada exitosamente');
        }
    });
});

// Ruta para obtener el promedio de calificaciones
app.get('/average', (req, res) => {
    Rating.aggregate([
        { $group: { _id: null, average: { $avg: "$value" } } }
    ], (err, result) => {
        if (err) {
            res.status(500).send('Error al calcular el promedio');
        } else {
            res.status(200).json({ average: result[0].average });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
