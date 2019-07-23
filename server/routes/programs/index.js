var express = require('express');
var router = express.Router();
const programsController = require('../../controllers/programs')

// programs
router.get('/', programsController.getAllPrograms)
router.post('/', programsController.addNewProgram)
router.get('/:programId', programsController.getProgram)
router.patch('/:programId', programsController.editProgram)
router.delete('/:programId', programsController.deleteProgram)

// programs_workouts
router.get('/:programId/workouts', programsController.getProgramWorkouts)
router.put('/:programId/workouts/:workoutId', programsController.addProgramWorkout)
router.delete('/:programId/workouts/:workoutId', programsController.removeProgramWorkout)

// programs_exercises
router.get('/:programId/exercises', programsController.getProgramExercises)
router.put('/:programId/exercises/:exerciseId', programsController.addProgramExercise)
router.delete('/:programId/exercises/:exerciseId', programsController.removeProgramExercise)

module.exports = router