const express = require('express');
const path = require('path');
const app = express();

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const PORT = 3001;
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})