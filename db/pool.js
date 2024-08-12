const { Pool } = require('pg');

// ALl the following properties should be read from a environment
// For the sake of the experiment they will be hardcoded

module.exports = new Pool({
    host: 'localhost', // adress to database
    user: 'daniellr',
    database: 'top_users',
    password: 'C0mplicated',
    port: 5432, // default db port
});

/* 
 Alternatively connect through a connection URI

 const { Pool } = require("pg");

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
});

*/
