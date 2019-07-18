
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('programs_exercises').del()
      .then(function () {
        // Inserts seed entries
        return knex('programs_exercises').insert([
          {
            program_id: 1,
            exercise_id: 1
          },
        ]);
      });
  };
  