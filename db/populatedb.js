const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS usernames(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
username VARCHAR(255)
);

INSERT INTO usernames (username)
VALUES
    ('Bryan'),
    ('Monkey'),
    ('Debia');
`;

async function main() {
    console.log('seeding...');
    console.log('Establishing client...');
    const client = new Client({
        connectionString: `postgresql://${process.env.db_user}:${process.env.db_password}@${process.env.db_host}:${process.env.db_port}/${process.env.db_database}`,
    });
    console.log('Client established');
    console.log('Conencting to database...');
    await client.connect();
    console.log('Connection established...');
    console.log('Querying SQL to database...');
    await client.query(SQL);
    console.log('Query succesful, ending connection...');
    await client.end();
    console.log('Connection ended');
    console.log('Seeding complete...');
}

main();
