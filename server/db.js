const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "9794",
  host: "localhost",
  port: 5432,
  database: "we_chat_app",
});

module.exports = pool;
