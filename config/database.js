const { createpool }  = require("mysql");

const pool = createpool({
    port :process.env.APP_PORT,
    host: process.env.DB_HOST,
    user :process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.MYSQL_DB,
    connectionLimit:10

});

module.exports = pool;  