var express = require('express');
var router = express.Router();
const workoutsController = require('../../controllers/workouts')

router.get('/', workoutsController.getAllWorkouts)
router.post('/', workoutsController.addWorkout)

router.get('/:workoutId', workoutsController.getWorkout)
router.patch('/:workoutId', workoutsController.editWorkout)
router.delete('/:workoutId', workoutsController.deleteWorkout)

router.get('/:workoutId/exercises', workoutsController.getWorkoutExercises)
router.get('/:workoutId/programs', workoutsController.getWorkoutPrograms)

module.exports = router
