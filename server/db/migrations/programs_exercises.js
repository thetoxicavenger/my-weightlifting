
exports.up = function(knex) {
    return knex.schema.createTable('programs_exercises', table => {
      table.increments('id').notNullable().primary()
      table.integer('program_id').notNullable()
      table.integer('exercise_id').notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('programs_exercises')
  };
  