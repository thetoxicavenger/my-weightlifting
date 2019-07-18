const knex = require("../db/knex.js");

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