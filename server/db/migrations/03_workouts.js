
exports.up = function (knex) {
    return knex.schema.createTable('workouts', table => {
  
      table.increments('id')
        .primary()
        .notNullable()
        .unsigned()
        .unique()
  
      table.string('name')
        .notNullable()
        .unique()
  
      table.string('img')
        .notNullable()
        .unique()
  
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('workouts')
  };
  