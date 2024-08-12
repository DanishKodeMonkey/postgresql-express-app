const pool = require('./pool');

async function getAllUsernames() {
    const { rows } = await pool.query('SELECT * FROM usernames');
    return rows;
}

async function insertUsername(username) {
    await pool.query('INSERT INTO usernames (username) VALUES ($1)', [
        username,
    ]);
    /* Alternatively to $1 insert use
    await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
    This is dangerous however as SQL injections could occour

    
    */
}

module.exports = {
    getAllUsernames,
    insertUsername,
};
