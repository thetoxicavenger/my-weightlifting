
exports.up = function (knex) {
    return knex.schema.createTable('workouts_exercises', table => {
  
      table.increments('id')
        .primary()
        .notNullable()
        .unsigned()
        .unique()
  
      table.integer('workout_id')
        .references('id')
        .inTable('workouts')
  
      table.integer('exercise_id')
        .references('id')
        .inTable('exercises')
  
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('workouts_exercises')
  };
  