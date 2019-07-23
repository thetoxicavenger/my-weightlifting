
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {

        table.increments('id')
            .primary()
            .notNullable()
            .unsigned()
            .unique()

        table.string('first_name', 2048)
            .notNullable()

        table.string('last_name')
            .notNullable()

        table.string('email')
            .unique()
            .notNullable()

        table.string('profile_img')
            .defaultsTo('https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png')

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
