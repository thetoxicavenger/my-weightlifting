
exports.up = function(knex) {
    return knex.schema.createTable('exercises', table => {
      table.increments('id')
      table.string('name')
      table.integer('sets')
      table.integer('reps')
      table.string('img')
      table.integer('workout_id').defaultsTo(null)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('exercises')
  };
  