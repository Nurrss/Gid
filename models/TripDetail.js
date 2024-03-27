const mongoose = require('mongoose');

const tripDetailsSchema = new mongoose.Schema({
  budget: { type: Number, required: true },
  groupSize: { type: Number, required: true },
  duration: { type: Number, required: true },
  preferences: { type: mongoose.Schema.Types.ObjectId, ref: 'UserPreference' },
});

const TripDetail = mongoose.model('TripDetail', tripDetailsSchema);

module.exports = TripDetail;
