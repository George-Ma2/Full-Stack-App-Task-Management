const Pool = require("pg").Pool;

const pool = new Pool({
    user: "taskmanagement_9qqk_user",
    password: "28IBOCCmzXtAHzW1VX46UgqPplC4MO6T",
    host: "dpg-csgonv3qf0us739o9dug-a",
    port: 5432,
    database: "taskmanagement_9qqk"
})

module.exports = pool;