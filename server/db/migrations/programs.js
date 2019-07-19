
exports.up = function(knex) {
    return knex.schema.createTable('programs', table => {
      table.increments('id').notNullable()
      table.string('name')
      table.string('img')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('programs')
  };
  