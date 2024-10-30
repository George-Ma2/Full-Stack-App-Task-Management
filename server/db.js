const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres2014",
    host: "process.env.DB_HOST",
    port: 5432,
    database: "taskmanagement"
})

module.exports = pool;