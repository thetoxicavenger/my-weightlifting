
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('workouts').del()
      .then(function () {
        // Inserts seed entries
        return knex('workouts').insert([
          {
            name: 'Day 1',
            img: 'https://static-s.aa-cdn.net/img/ios/1121042545/bcdf9e6b1a0223b37e57de428c63dfb1?v=1',
          },
          {
            name: 'Day 2',
            img: 'https://apprecs.org/ios/images/app-icons/256/c7/985518279.jpg',
          },
          {
            name: 'Day 4',
            img: 'https://cdn.iconscout.com/icon/free/png-256/workout-40-1100757.png',
          },
          {
            name: 'Day 5',
            img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/circle-exercise-fitness-orange-run-running-workout-icon-45827.png',
          },
          
        ]);
      });
  };
  