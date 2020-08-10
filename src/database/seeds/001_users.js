
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'maria', email: 'maria@maria.com', hash: 'asdfsdf'},
        {name: 'joao', email: 'joao@joao.com', hash: 'asjhfl'},
        {name: 'luiza', email: 'luiza@luiza.com', hash: 'sladkfjçs'}
      ]);
    });
};
