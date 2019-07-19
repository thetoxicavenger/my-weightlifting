
exports.up = function(knex) {
    return knex.schema.createTable('programs_workouts', table => {
      table.increments('id').notNullable()
      table.integer('program_id')
      table.integer('workout_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('programs_workouts')
  };
  