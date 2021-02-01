const express = require('express');

const peopleService = require('./people-service');

const peopleRouter = express.Router();

peopleRouter
  .route('/')
  .get((req, res, next) => {
    let peopleQueue = peopleService.getAll();
    res.status(200).json(peopleQueue);
  })
  .post((req, res, next) => {
    let { name } = req.body;
    peopleService.enqueue(name);

    let peopleQueue = peopleService.getAll();
    res.status(201).json(peopleQueue[peopleQueue.length - 1]);
  });

module.exports = peopleRouter;
