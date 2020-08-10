// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '35.224.103.88',
      user : 'root',
      password : 'password',
      database : 'dbtest'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }

};
