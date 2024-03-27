const router = require('express').Router();
const _ = require('lodash');
const TripDetail = require('../models/TripDetail'); // Import the correct model
const ApiOptimizer = require('../api');
const errorHandler = require('../middleware/errorHandler');

const tripDetail = new ApiOptimizer(TripDetail); // Rename the variable
const modelName = 'TripDetail'; // Update the modelName

router.get('/', async (req, res) => {
  try {
    await tripDetail.getAll(req, res); // Use the renamed variable
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.get('/:id', async (req, res) => {
  try {
    await tripDetail.getById(req, res, modelName); // Use the updated modelName
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const entityId = _.get(req, 'params.id');
    const { budget, groupSize, duration, preferences } = req.body;
    const fieldsToUpdate = { budget, groupSize, duration, preferences };
    await tripDetail.updateById({ entityId, fieldsToUpdate, req, res }); // Use the renamed variable
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.post('/add', async (req, res) => {
  try {
    const { budget, groupSize, duration, preferences } = req.body;
    const entity = { budget, groupSize, duration, preferences };
    await tripDetail.add({ entity, res }); // Use the renamed variable
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await tripDetail.deleteById(req, res, modelName); // Use the updated modelName
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
