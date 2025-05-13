const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRoutes = require('./routes/productRoutes');
require('dotenv').config();
const path = require('path');  // Ajout du module 'path'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Toutes les routes /api/products sont dans productRoutes.js
app.use('/images', express.static(path.join(__dirname, 'images'))); // Sert le dossier 'images'
app.use('/api/products', productsRoutes);

app.get('/', (req, res) => {
  res.send('API SimpleBoutique fonctionnelle');
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB établie'))
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
