const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Permettre l'accès au dossier public pour servir des fichiers statiques
app.use(express.static('public'));

// Route pour obtenir les cargaisons
app.get('/api/cargos', (req, res) => {
  fs.readFile('cargos.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading cargo data');
      return;
    }
    res.send(data);
  });
});

// Route pour sauvegarder les cargaisons
app.post('/api/cargos', (req, res) => {
  const newCargo = req.body;
  fs.readFile('cargos.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading cargo data');
      return;
    }
    const cargos = data ? JSON.parse(data) : [];
    cargos.push(newCargo);
    fs.writeFile('cargos.json', JSON.stringify(cargos), (err) => {
      if (err) {
        res.status(500).send('Error saving cargo data');
        return;
      }
      res.status(200).send('Cargo saved successfully');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
