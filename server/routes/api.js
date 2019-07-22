var express = require('express');
var router = express.Router();

const usersRouter = require('./users')
const programsRouter = require('./programs')
const workoutsRouter = require('./workouts')
const exercisesRouter = require('./exercises')


router.use('/users', usersRouter)
router.use('/programs', programsRouter)
router.use('/workouts', workoutsRouter)
router.use('/exercises', exercisesRouter)

module.exports = router;
