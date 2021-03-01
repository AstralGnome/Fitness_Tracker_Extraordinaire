const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
  day: {
    type: Date, 
    default: Date.now
  },
  
  exercises:[ //array necessary! type and name could be required.
    {
    type: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;