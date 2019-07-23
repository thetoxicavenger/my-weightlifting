const knex = require("../db/knex.js");

// workouts
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

// workouts_programs
exports.getWorkoutPrograms = async function (req, res) {
    const programs = await knex('programs_workouts').where('programs_workouts.workout_id', req.params.workoutId)
        .rightOuterJoin('programs', 'programs_workouts.program_id', 'programs.id')
        .select('programs.id', 'programs.name', 'programs.img')
    res.json(programs)
}
exports.addWorkoutProgram = async function (req, res) {
    await knex('programs_workouts').insert({
        workout_id: req.params.workoutId,
        program_id: req.params.programId
    })
    res.send(200)
}

// workouts_exercises
exports.getWorkoutExercises = async function (req, res) {
    const exercises = await knex('workouts_exercises').where('workout_id', req.params.workoutId)
        .rightOuterJoin('exercises', 'workouts_exercises.exercise_id', 'exercises.id')
        .select('exercises.id', 'exercises.name', 'exercises.sets', 'exercises.reps', 'exercises.img')
    res.json(exercises)
}


