const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('will send all leaders to you');
  })
  .post((req, res, next) => {
    res.end('will add the leaders: ' + req.body.name + " with details: " + req.body.description);
  })
  .put((req, res, next) => {
    res.statusCode = 404;
    res.end('PUT not supported for /leaders');
  })
  .delete((req, res, next) => {
    res.end('deleting all the leaders');
  });
  
leaderRouter.route('/:leaderId')
  .get((req, res, next) => {
    res.end('will send leader with id: '+req.params.leaderId);
  })
  .post((req, res, next) => {
    res.end('Operation not supported');
  })
  .put((req, res, next) => {
    res.write('updating the leader: ' + req.params.leaderId);
    res.end(' will update the leader with id: ' + req.params.leaderId + ' with details: ' + req.body.description);
  })
  .delete((req, res, next) => {
    res.end('deleting the leader with id: ' + req.params.leaderId);
  });


module.exports = leaderRouter;