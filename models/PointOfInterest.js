const mongoose = require('mongoose');

const pointOfInterestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: [
      'historical',
      'shopping',
      'restaurant',
      'nature',
      'event',
      'amusementPark',
    ],
    required: true,
  },
  coordinates: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true },
  },
  description: { type: String },
  rating: { type: Number, default: 0 },
  price: { type: Number, required: false },
  openingHours: {
    monday: { open: Number, close: Number },
    tuesday: { open: Number, close: Number },
    wednesday: { open: Number, close: Number },
    thursday: { open: Number, close: Number },
    friday: { open: Number, close: Number },
    saturday: { open: Number, close: Number },
    sunday: { open: Number, close: Number },
  },
});

pointOfInterestSchema.index({ coordinates: '2dsphere' });

const PointOfInterest = mongoose.model(
  'PointOfInterest',
  pointOfInterestSchema,
);

module.exports = PointOfInterest;
