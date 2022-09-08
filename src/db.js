const Pool = require('pg').Pool;
/*
const pool = new  Pool({
    user: "postgres",
    host:"localhost",
    database:"postgres",
    password: "root",
    port: 5432
})
*/

const pool = new  Pool({
    user: "postgres",
    host:"localhost",
    database:"mtpca",
    password: "root",
    port: 5432
})


module.exports = pool;