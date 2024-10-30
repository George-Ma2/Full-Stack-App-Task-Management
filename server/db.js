const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.DB_USER || 'taskmanagement_9qqk_user',
    password: process.env.DB_PASSWORD || '28IBOCCmzXtAHzW1VX46UgqPplC4MO6T',
    host: process.env.DB_HOST || 'dpg-csgonv3qf0us739o9dug-a',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'taskmanagement_9qqk',
})

module.exports = pool;