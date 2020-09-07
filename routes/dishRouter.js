const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('will send all dishes to you');
  })
  .post((req, res, next) => {
    res.end('will add the dishes: ' + req.body.name + " with details: " + req.body.description);
  })
  .put((req, res, next) => {
    res.statusCode = 404;
    res.end('PUT not supported for /dishes');
  })
  .delete((req, res, next) => {
    res.end('deleting all the dishes');
  });
  
dishRouter.route('/:dishId')
  .get((req, res, next) => {
    res.end('will send dish with id: '+req.params.dishId);
  })
  .post((req, res, next) => {
    res.end('Operation not supported');
  }) 
  .put((req, res, next) => {
    res.write('updating the dish: ' + req.params.dishId);
    res.end(' will update the dish with id: ' + req.params.dishId + ' with details: ' + req.body.description);
  })
  .delete((req, res, next) => {
    res.end('deleting the dishe with id: ' + req.params.dishId);
  });


module.exports = dishRouter;


