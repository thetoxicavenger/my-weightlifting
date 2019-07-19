
exports.up = function(knex) {
    return knex.schema.createTable('programs_workouts', table => {
      table.increments('id').notNullable().primary()
      table.integer('program_id').notNullable()
      table.integer('workout_id').notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('programs_workouts')
  };
  