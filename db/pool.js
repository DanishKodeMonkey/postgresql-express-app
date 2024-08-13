const { Pool } = require('pg');
require('dotenv').config();

// ALl the following properties should be read from a environment
// For the sake of the experiment they will be hardcoded

module.exports = new Pool({
    host: `${process.env.db_host}`, // adress to database
    user: `${process.env.db_user}`,
    database: `${process.env.db_database}`,
    password: `${process.env.db_password}`,
    port: `${process.env.db_port}`, // default db port
});

/* 
 Alternatively connect through a connection URI

 const { Pool } = require("pg");

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
});

*/
