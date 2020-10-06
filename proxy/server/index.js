const express = require('express');
const path = require('path');
const app = express();

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const PORT = 3000;
app.use(express.static(PUBLIC_DIR));

app.get('api/products/questions/sort/:sort', (req, res) => {
  res.redirect(`http://localhost:3001/bundle.js${req.baseUrl}`);
  console.log('success');
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})