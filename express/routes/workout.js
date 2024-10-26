const express = require("express");
const Workout = require("../models/workoutsce");
const router = express.Router();
// GET ALL WORKOUT
router.get("/", async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
});
//  get a single workout
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
});
// post a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  //add doc to db
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// delete a new workout
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
});
// update a new workout
router.patch("/:id", async(req, res) => {
   const { id } = req.params;
   const workout= await Workout.findByIdAndUpdate({_id:id},{
      ...req.body
   })
   if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    res.status(200).json(workout);
});

module.exports = router;
