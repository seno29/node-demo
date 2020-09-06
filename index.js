const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
});

app.get('/dishes', (req, res, next) => {
  res.end('will send all dishes to you');
});

app.post('/dishes', (req, res, next) => {
  res.end('will add the dishes: ' + req.body.name + " with details: " + req.body.description);
});

app.put('/dishes', (req, res, next) => {
  res.statusCode = 404;
  res.end('PUT not supported for /dishes');
});

app.delete('/dishes', (req, res, next) => {
  res.end('deleting all the dishes');
});


app.get('/dishes/:dishId', (req, res, next) => {
  res.end('will send dish with id: '+req.params.dishId);
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.end('Operation not supported');
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('updating the dish: ' + req.params.dishId);
  res.end(' will update the dish with id: ' + req.params.dishId + ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
  res.end('deleting the dishe with id: ' + req.params.dishId);
});

app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body><h1>Hello</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`server running at : http://${hostname}:${port}`);
})