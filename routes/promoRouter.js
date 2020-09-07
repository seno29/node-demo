const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('will send all promos to you');
  })
  .post((req, res, next) => {
    res.end('will add the promos: ' + req.body.name + " with details: " + req.body.description);
  })
  .put((req, res, next) => {
    res.statusCode = 404;
    res.end('PUT not supported for /promos');
  })
  .delete((req, res, next) => {
    res.end('deleting all the promos');
  });
  
promoRouter.route('/:promoId')
  .get((req, res, next) => {
    res.end('will send promo with id: '+req.params.promoId);
  })
  .post((req, res, next) => {
    res.end('Operation not supported');
  })
  .put((req, res, next) => {
    res.write('updating the promo: ' + req.params.promoId);
    res.end(' will update the promo with id: ' + req.params.promoId + ' with details: ' + req.body.description);
  })
  .delete((req, res, next) => {
    res.end('deleting the promo with id: ' + req.params.promoId);
  });


module.exports = promoRouter;