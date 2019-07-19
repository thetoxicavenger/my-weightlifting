
exports.up = function(knex) {
    return knex.schema.createTable('workouts_exercises', table => {
      table.increments('id').notNullable().primary()
      table.integer('workout_id').notNullable()
      table.integer('exercise_id').notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('workouts_exercises')
  };
  