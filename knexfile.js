// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/maindb.db3'
    },
    migrations : {
      directory : "./data/migrations"
    },
    seeds : {
      directory : "./data/seeds",
    },
    pool : {
      afterCreate : (conn,done) => {
        conn.run("PRAGMA foreign_key = ON",done)
      }
    },
    useNullAsDefault : true,
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testdb.db3'
    },
    migrations : {
      directory : "./data/migrations"
    },
    seeds : {
      directory : "./data/seeds",
    },
    pool : {
      afterCreate : (conn,done) => {
        conn.run("PRAGMA foreign_key = ON",done)
      }
    },
    useNullAsDefault : true,
  },

};