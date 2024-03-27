const router = require('express').Router();
const _ = require('lodash');
const UserPreference = require('../models/UserPreference');
const ApiOptimizer = require('../api');
const errorHandler = require('../middleware/errorHandler');

const userPreference = new ApiOptimizer(UserPreference);
const modelName = 'UserPreference';

router.get('/', async (req, res) => {
  try {
    await userPreference.getAll(req, res);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.get('/:id', async (req, res) => {
  try {
    await userPreference.getById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.post('/', async (req, res) => {
  try {
    const newPreferences = _.pick(req.body, [
      'historical',
      'shopping',
      'restaurants',
      'nature',
      'events',
      'amusementParks',
    ]);
    await userPreference.add({ entity: newPreferences, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const entityId = _.get(req, 'params.id');
    const preferencesToUpdate = _.pick(req.body, [
      'historical',
      'shopping',
      'restaurants',
      'nature',
      'events',
      'amusementParks',
    ]);
    await userPreference.updateById({
      entityId,
      fieldsToUpdate: preferencesToUpdate,
      req,
      res,
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await userPreference.deleteById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
