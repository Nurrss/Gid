const mongoose = require('mongoose');

const tripPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  details: { type: mongoose.Schema.Types.ObjectId, ref: 'TripDetail' },
  itinerary: [
    {
      day: { type: Number },
      date: { type: Date },
      activities: [
        {
          poi: { type: mongoose.Schema.Types.ObjectId, ref: 'PointOfInterest' },
          timeSlot: { start: { type: Date }, end: { type: Date } },
        },
      ],
      meals: {
        lunch: {
          poi: { type: mongoose.Schema.Types.ObjectId, ref: 'PointOfInterest' },
        },
        dinner: {
          poi: { type: mongoose.Schema.Types.ObjectId, ref: 'PointOfInterest' },
        },
      },
      accommodation: {
        poi: { type: mongoose.Schema.Types.ObjectId, ref: 'PointOfInterest' },
      },
    },
  ],
});

const TripPlan = mongoose.model('TripPlan', tripPlanSchema);

module.exports = TripPlan;
