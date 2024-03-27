const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({
  historical: { type: Boolean, default: false },
  shopping: { type: Boolean, default: false },
  restaurants: { type: Boolean, default: false },
  nature: { type: Boolean, default: false },
  events: { type: Boolean, default: false },
  amusementParks: { type: Boolean, default: false },
});

const UserPreference = mongoose.model('UserPreference', userPreferenceSchema);

module.exports = UserPreference;
