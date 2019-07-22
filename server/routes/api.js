var express = require('express');
var router = express.Router();
const programsController = require('../controllers/programs')
const workoutsController = require('../controllers/workouts')
const exercisesController = require('../controllers/exercises')


/* PROGRAMS */
router.get('/programs', programsController.getAllPrograms)
router.post('/programs', programsController.addNewProgram)

router.get('/programs/:programId', programsController.getProgram)
router.patch('/programs/:programId', programsController.editProgram)
router.delete('/programs/:programId', programsController.deleteProgram)

router.get('/programs/:programId/workouts', programsController.getProgramWorkouts)
router.get('/programs/:programId/exercises', programsController.getProgramExercises)


/* WORKOUTS */
router.get('/workouts', workoutsController.getAllWorkouts)
router.post('/workouts', workoutsController.addWorkout)

router.get('/workouts/:workoutId', workoutsController.getWorkout)
router.patch('/workouts/:workoutId', workoutsController.editWorkout)
router.delete('/workouts/:workoutId', workoutsController.deleteWorkout)

router.get('/workouts/:workoutId/exercises', workoutsController.getWorkoutExercises)
router.get('/workouts/:workoutId/programs', workoutsController.getWorkoutPrograms)


/* EXERCISES */
router.get('/exercises', exercisesController.getAllExercises)
router.post('/exercises', exercisesController.addExercise)

router.get('/exercises/:exerciseId', exercisesController.getExercise)
router.patch('/exercises/:exerciseId', exercisesController.editExercise)
router.delete('/exercises/:exerciseId', exercisesController.deleteExercise)

router.get('/exercises/:exerciseId/programs', exercisesController.getExercisePrograms)

module.exports = router;
