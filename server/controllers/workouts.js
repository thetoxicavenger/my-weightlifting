const knex = require("../db/knex.js");

exports.getAllWorkouts = async function (req, res) {
    const workouts = await knex('workouts')
    res.json(workouts)
}

exports.addWorkout = async function (req, res) {
    const workout = await knex('workouts').insert(req.body).returning('*')
    res.json(workout)
}

exports.getWorkout = async function (req, res) {
    const workout = await knex('workouts').where('id', req.params.workoutId).first()
    res.json(workout)
}

exports.editWorkout = async function (req, res) {
    await knex('workouts').where('id', req.params.workoutId).update(req.body)
    res.sendStatus(200)
}

exports.deleteWorkout = async function (req, res) {
    await knex('workouts').where('id', req.params.workoutId).del()
    res.sendStatus(200)
}

exports.getWorkoutExercises = async function (req, res) {
    const exercises = await knex('exercises').where('workout_id', req.params.workoutId)
    res.json(exercises)
}