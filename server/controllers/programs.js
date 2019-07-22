const knex = require("../db/knex.js");

exports.getAllPrograms = async function (req, res) {
    const programs = await knex('programs')
    res.json(programs)
}

exports.getProgram = async function (req, res) {
    const program = await knex('programs').where('id', req.params.programId).first().then(program => {
        res.json(program)
    })
}

exports.addNewProgram = async function (req, res) {
    await knex('programs').insert(req.body).returning('*').then(program => {
        res.json(program)
    })
}

exports.editProgram = async function (req, res) {
    await knex('programs').where('id', req.params.programId).update(req.body).then(() => {
        res.sendStatus(200)
    })
}

exports.deleteProgram = async function (req, res) {
    await knex('programs').where('id', req.params.programId).del().then(() => {
        res.sendStatus(200)
    })
}

exports.getProgramWorkouts = async function (req, res) {
    const workouts = await knex('programs_workouts').where('program_id', req.params.programId)
        .rightOuterJoin('workouts', 'programs_workouts.workout_id', '=', 'workouts.id')
        .select('workouts.id', 'name', 'img')
    res.json(workouts)
}

exports.addWorkoutToProgram = async function (req, res) {
    const workout = await knex('workouts').insert(req.body).returning('*')
    res.json(workout)
}

exports.getProgramExercises = async function (req, res) {
    const exercises = await knex('programs_exercises').where('program_id', req.params.programId)
        .rightOuterJoin('exercises', 'exercises.id', 'programs_exercises.exercise_id')
        .select('exercises.id', 'exercises.name', 'exercises.sets', 'exercises.reps', 'exercises.img')
    res.json(exercises)
}