const knex = require("../db/knex.js");

// exercises
exports.getAllExercises = async function(req, res) {
    const exercises = await knex('exercises')
    res.json(exercises)
}
exports.addExercise = async function(req, res) {
    const exercise = await knex('exercises').insert(req.body).returning('*')
    res.json(exercise)
}
exports.getExercise = async function(req, res) {
    const exercise = await knex('exercises').where('id', req.params.exerciseId).first()
    res.json(exercise)
}
exports.editExercise = async function (req, res) {
    await knex('exercises').where('id', req.params.exerciseId).update(req.body)
    res.sendStatus(200)
}
exports.deleteExercise = async function (req, res) {
    await knex('exercises').where('id', req.params.exerciseId).del()
    res.sendStatus(200)
}

// exercisePrograms
exports.getExercisePrograms = async function (req, res) {
    const parsedIdParam = parseInt(req.params.exerciseId)
    if (!parsedIdParam) {
        return res.sendStatus(422)
    }
    const joinTable = 'programs_exercises'
    const queryParamName = 'exercise_id'
    try {
        const programs = await knex(joinTable).where(`${joinTable}.${queryParamName}`, req.params.exerciseId)
            .rightOuterJoin('programs', `${joinTable}.program_id`, 'programs.id')
            .select('programs.id', 'programs.name', 'programs.img')
        res.json(programs)
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}
exports.addExerciseProgram = async function (req, res) {
    await knex('programs_exercises').insert({
        exercise_id: req.params.exerciseId,
        program_id: req.params.programId
    })
    res.sendStatus(200)
}
exports.removeExerciseProgram = async function (req, res) {
    await knex('programs_exercises').where({
        exercise_id: req.params.exerciseId,
        program_id: req.params.programId
    })
    .del()
    res.sendStatus(200)
}

// exerciseWorkouts
exports.getExerciseWorkouts = async function (req, res) {
    const parsedIdParam = parseInt(req.params.exerciseId)
    if (!parsedIdParam) {
        return res.sendStatus(422)
    }
    const joinTable = 'workouts_exercises'
    const queryParamName = 'exercise_id'
    try {
        const programs = await knex(joinTable).where(`${joinTable}.${queryParamName}`, parsedIdParam)
            .rightOuterJoin('workouts', `${joinTable}.workout_id`, 'workouts.id')
            .select('workouts.id', 'workouts.img', 'workouts.name')
        res.json(programs)
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

exports.addExerciseWorkout = async function (req, res) {
    await knex('workouts_exercises').insert({
        exercise_id: req.params.exerciseId,
        workout_id: req.params.workoutId
    })
    res.sendStatus(200)
}