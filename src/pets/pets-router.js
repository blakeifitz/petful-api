const express = require('express');
const people = require('../people/people-service');
const pets = require('./pets-service');

const petRouter = express.Router();

petRouter.route('/').get((req, res, next) => {
  let petList = pets.get();
  return res.status(200).json(petList);
});

petRouter.route('/:petType').delete((req, res, next) => {
  let pet = req.params.petType;
  let adopter = {};
  try {
    adopter.pet = pets.adopt(pet);
    adopter.owner = people.dequeue();
  } catch (e) {
    return res.status(400).json(e.message);
  }

  return res.status(200).json(adopter);
});

module.exports = petRouter;
