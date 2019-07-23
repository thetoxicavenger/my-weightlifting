
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('programs_workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('programs_workouts').insert([
        {
          program_id: 1,
          workout_id: 1
        },
      ]);
    });
};
