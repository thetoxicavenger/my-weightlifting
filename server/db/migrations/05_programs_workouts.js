
exports.up = function (knex) {
  return knex.schema.createTable('programs_workouts', table => {

    table.increments('id')
      .primary()
      .notNullable()
      .unsigned()
      .unique()

    table.integer('program_id')
      .references('id')
      .inTable('programs')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.integer('workout_id')
      .references('id')
      .inTable('workouts')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.unique(['program_id', 'workout_id'])

  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('programs_workouts')
};
