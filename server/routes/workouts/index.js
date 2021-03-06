var express = require('express');
var router = express.Router();
const workoutsController = require('../../controllers/workouts')

// workouts
router.get('/', workoutsController.getAllWorkouts)
router.post('/', workoutsController.addWorkout)
router.get('/:workoutId', workoutsController.getWorkout)
router.patch('/:workoutId', workoutsController.editWorkout)
router.delete('/:workoutId', workoutsController.deleteWorkout)

// workoutPrograms
router.get('/:workoutId/programs', workoutsController.getWorkoutPrograms)
router.put('/:workoutId/programs/:programId', workoutsController.addWorkoutProgram)
router.delete('/:workoutId/programs/:programId', workoutsController.removeWorkoutProgram)

// workoutExercises
router.get('/:workoutId/exercises', workoutsController.getWorkoutExercises)
router.put('/:workoutId/exercises/:exerciseId', workoutsController.addWorkoutExercise)
router.delete('/:workoutId/exercises/:exerciseId', workoutsController.removeWorkoutExercise)

module.exports = router
