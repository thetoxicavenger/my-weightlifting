var express = require('express');
var router = express.Router();

const programsController = require('../../controllers/programs')

router.get('/', programsController.getAllPrograms)
router.post('/', programsController.addNewProgram)

router.get('/:programId', programsController.getProgram)
router.patch('/:programId', programsController.editProgram)
router.delete('/:programId', programsController.deleteProgram)

router.get('/:programId/workouts', programsController.getProgramWorkouts)
router.get('/:programId/exercises', programsController.getProgramExercises)

router.put('/:programId/workouts/:workoutId', programsController.addProgramWorkout)
router.delete('/:programId/workouts/:workoutId', programsController.removeProgramWorkout)

module.exports = router