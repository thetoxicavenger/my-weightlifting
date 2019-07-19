
exports.up = function(knex) {
    return knex.schema.createTable('programs', table => {
      table.increments('id').notNullable().primary()
      table.string('name').notNullable()
      table.string('img')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('programs')
  };
  