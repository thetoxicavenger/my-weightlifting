
exports.up = function (knex) {
    return knex.schema.createTable('exercises', table => {
      table.increments('id')
        .notNullable()
        .primary()
        .unsigned()
        .unique()
  
      table.string('name')
        .unique()
        .notNullable()
  
      table.integer('sets')
      table.integer('reps')
  
      table.string('img')
        .notNullable()
        .unique()
  
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('exercises')
  };
  