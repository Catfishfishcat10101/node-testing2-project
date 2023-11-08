module.exports = {
    developmet: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            user: 'your_password',
            database: 'your_development_database'        }
    },
    migrations: {
        directory: './db/migrations'
    },
    seeds: {
        directory: './db/seeds'
    }
},
testing: {
    client: 'postgresql',
    connection: {
        host: 'localhost',
        user: 'user_name',
        password: 'your_password',
        database: 'your_testing_database'
    },
    migrations: {
        directory: './db/migrations'
    }
};