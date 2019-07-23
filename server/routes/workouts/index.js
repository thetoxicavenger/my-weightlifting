var express = require('express');
var router = express.Router();
const workoutsController = require('../../controllers/workouts')

// workouts
router.get('/', workoutsController.getAllWorkouts)
router.post('/', workoutsController.addWorkout)
router.get('/:workoutId', workoutsController.getWorkout)
router.patch('/:workoutId', workoutsController.editWorkout)
router.delete('/:workoutId', workoutsController.deleteWorkout)

// workouts_programs
router.get('/:workoutId/programs', workoutsController.getWorkoutPrograms)
router.put('/:workoutId/programs/:programId', workoutsController.addWorkoutProgram)

// workouts_exercises
router.get('/:workoutId/exercises', workoutsController.getWorkoutExercises)

module.exports = router
