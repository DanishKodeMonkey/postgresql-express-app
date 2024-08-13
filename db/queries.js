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

async function searchUsers(searchTerm) {
    const query = 'SELECT username FROM usernames WHERE username ILIKE $1';
    const values = [`%${searchTerm}%`];

    try {
        const res = await pool.query(query, values);
        return res.rows; // returns rows that match query
    } catch (err) {
        console.error('Error executing query', err.stack);
        throw err;
    }
}

async function deleteUsernames() {
    try {
        const res = await pool.query(`DROP TABLE usernames`);
        return res.command;
    } catch (err) {
        console.error('Error dropping table', err.stack);
        throw err;
    }
}
module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsers,
    deleteUsernames,
};
