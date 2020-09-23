const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const port = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end('<html><body><h1>Hello</h1></body></html>');
});

app.listen(port, () => {
  console.log(`server running `);
})