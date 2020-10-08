const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

app.get('/api/products/questions/sort/:sort', (req, res) => {

  axios.get(`http://ec2-52-12-238-141.us-west-2.compute.amazonaws.com:80${req.url}`)
    .then(({data}) => res.send(data))
    .then((err) => res.send(err));
});

app.get('/api/products/reviews/:id/:count/:sort', (req, res) => {
  
  axios.get(`http://ec2-34-212-140-67.us-west-2.compute.amazonaws.com:80${req.url}`)
    .then(({data}) => res.send(data))
    .then((err) => res.send(err));
});

app.get('/api/products/reviews/avg/:item', (req, res) => {
  
  axios.get(`http://ec2-34-212-140-67.us-west-2.compute.amazonaws.com:80${req.url}`)
    .then(({data}) => res.send(data))
    .then((err) => res.send(err));
});

app.get('/api/products/:id', (req, res) => {
 
  axios.get(`http://ec2-34-219-113-81.us-west-2.compute.amazonaws.com:80${req.url}`)
    .then(({data}) => res.send(data))
    .then((err) => res.send(err));
});

app.get('/api/products/:id/relatedItems', (req, res) => {

  axios.get(`http://ec2-54-212-185-70.us-west-2.compute.amazonaws.com:80${req.url}`)
    .then(({data}) => res.send(data))
    .then((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})