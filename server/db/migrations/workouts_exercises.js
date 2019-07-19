
exports.up = function(knex) {
    return knex.schema.createTable('workouts_exercises', table => {
      table.increments('id').notNullable()
      table.integer('workout_id')
      table.integer('exercise_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('workouts_exercises')
  };
  