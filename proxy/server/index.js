const express = require('express');
const path = require('path');
const app = express();

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const PORT = 3000;
app.use(express.static(PUBLIC_DIR));

app.get('/api/products/questions/sort/:sort', (req, res) => {
  res.redirect(`http://localhost:3001${req.url}`);
});

app.get('/api/products/reviews/:id/:count/:sort', (req, res) => {
  res.redirect(`http://localhost:3005${req.url}`);
});

app.get('/api/products/reviews/avg/:item', (req, res) => {
  res.redirect(`http://localhost:3005${req.url}`);
});

app.get('/api/products/:id', (req, res) => {
  res.redirect(`http://localhost:3002${req.url}`);
});

app.get('/api/products/:id/relatedItems', (req, res) => {
  res.redirect(`http://localhost:3004${req.url}`);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})