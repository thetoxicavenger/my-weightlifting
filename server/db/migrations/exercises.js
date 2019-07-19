
exports.up = function(knex) {
    return knex.schema.createTable('exercises', table => {
      table.increments('id').notNullable().primary()
      table.string('name').unique().notNullable()
      table.integer('sets')
      table.integer('reps')
      table.string('img')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('exercises')
  };
  