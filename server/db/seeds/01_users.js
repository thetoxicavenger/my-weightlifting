
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Mitch',
          last_name: 'Cravens',
          email: 'mcravens12@gmail.com',
          profile_img: 'https://avatars3.githubusercontent.com/u/11463589?s=460&v=4'
        },
      ]);
    });
};
