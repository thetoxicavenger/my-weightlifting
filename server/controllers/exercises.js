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