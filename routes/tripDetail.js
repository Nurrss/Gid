const router = require('express').Router();
const _ = require('lodash');
const TripPlan = require('../models/TripPlan'); // Import the correct model
const ApiOptimizer = require('../api');
const errorHandler = require('../middleware/errorHandler');

const tripPlanOptimizer = new ApiOptimizer(TripPlan); // Use a descriptive variable for TripPlan
const modelName = 'TripPlan'; // Reflect the model's purpose

// Get all trip plans
router.get('/', async (req, res) => {
  try {
    await tripPlanOptimizer.getAll(req, res); // Use the tripPlan variable
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// Get a trip plan by ID
router.get('/:id', async (req, res) => {
  try {
    await tripPlanOptimizer.getById(req, res, modelName); // Reflect the model's purpose
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// Create a new trip plan
router.post('/', async (req, res) => {
  try {
    // Assuming your POST request will send the trip plan details and the itinerary
    const { user, details, itinerary } = req.body;
    const newTripPlan = { user, details, itinerary };
    await tripPlanOptimizer.add({ entity: newTripPlan, res }); // Use the tripPlan variable
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// Update an existing trip plan by ID
router.put('/:id', async (req, res) => {
  try {
    const entityId = _.get(req, 'params.id');
    const { user, details, itinerary } = req.body; // These are the fields you would update
    const fieldsToUpdate = { user, details, itinerary };
    await tripPlanOptimizer.updateById({ entityId, fieldsToUpdate, req, res }); // Use the tripPlan variable
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// Delete a trip plan by ID
router.delete('/:id', async (req, res) => {
  try {
    await tripPlanOptimizer.deleteById(req, res, modelName); // Reflect the model's purpose
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
