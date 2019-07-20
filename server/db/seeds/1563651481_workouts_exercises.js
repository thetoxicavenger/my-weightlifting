
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts_exercises').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts_exercises').insert([
        {
          workout_id: 1,
          exercise_id: 1
        },
      ]);
    });
};
