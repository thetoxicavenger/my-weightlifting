var express = require('express');
var router = express.Router();
const exercisesController = require('../../controllers/exercises')


router.get('/', exercisesController.getAllExercises)
router.post('/', exercisesController.addExercise)

router.get('/:exerciseId', exercisesController.getExercise)
router.patch('/:exerciseId', exercisesController.editExercise)
router.delete('/:exerciseId', exercisesController.deleteExercise)

router.get('/:exerciseId/programs', exercisesController.getExercisePrograms)
router.get('/:exerciseId/workouts', exercisesController.getExerciseWorkouts)

module.exports = router