const router = require('express').Router();
const _ = require('lodash');
const Location = require('../models/PointOfInterest');
const ApiOptimizer = require('../api');
const errorHandler = require('../middleware/errorHandler');

const location = new ApiOptimizer(Location);
const modelName = 'Location';

router.get('/', async (req, res) => {
  try {
    await location.getAll(req, res);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.get('/:id', async (req, res) => {
  try {
    await location.getById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const entityId = _.get(req, 'params.id');
    const {
      name,
      type,
      description,
      coordinates,
      rating,
      price,
      openingHours,
    } = req.body;
    const fieldsToUpdate = {
      name,
      type,
      description,
      coordinates,
      rating,
      price,
      openingHours,
    };
    await location.updateById({ entityId, fieldsToUpdate, req, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.post('/add', async (req, res) => {
  try {
    const {
      name,
      type,
      description,
      coordinates,
      rating,
      price,
      openingHours,
    } = req.body;
    const entity = {
      name,
      type,
      description,
      coordinates,
      rating,
      price,
      openingHours,
    };
    await location.add({ entity, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await location.deleteById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
