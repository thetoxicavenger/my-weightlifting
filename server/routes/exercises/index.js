var express = require('express');
var router = express.Router();
const exercisesController = require('../../controllers/exercises')

// exercises
router.get('/', exercisesController.getAllExercises)
router.post('/', exercisesController.addExercise)
router.get('/:exerciseId', exercisesController.getExercise)
router.patch('/:exerciseId', exercisesController.editExercise)
router.delete('/:exerciseId', exercisesController.deleteExercise)

// exercisePrograms
router.get('/:exerciseId/programs', exercisesController.getExercisePrograms)
router.put('/:exerciseId/programs/:programId', exercisesController.addExerciseProgram)

// exerciseWorkouts
router.get('/:exerciseId/workouts', exercisesController.getExerciseWorkouts)

module.exports = router