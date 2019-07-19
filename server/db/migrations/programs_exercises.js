
exports.up = function(knex) {
    return knex.schema.createTable('programs_exercises', table => {
      table.increments('id').notNullable()
      table.integer('program_id')
      table.integer('exercise_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('programs_exercises')
  };
  