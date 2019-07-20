
exports.up = function (knex) {
  return knex.schema.createTable('programs_exercises', table => {

    table.increments('id')
      .primary()
      .notNullable()
      .unsigned()
      .unique()

    table.integer('program_id')
      .references('id')
      .inTable('programs')

    table.integer('exercise_id')
      .references('id')
      .inTable('exercises')

  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('programs_exercises')
};
