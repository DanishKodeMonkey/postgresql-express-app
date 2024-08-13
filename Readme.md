# Postgres Express App

This project is a simple Node.js and Express application that interacts with a PostgreSQL database. The app allows users to create, search, and delete usernames in a database. The views are rendered using the EJS templating engine, and the database operations are handled using the `pg` package.

## Table of Contents

-   [Configuration](#configuration)
-   [Project Structure](#project-structure)
-   [Usage](#usage)
-   [Routes](#routes)
-   [Database](#database)

# Configuration

The application uses environment variables to configure the connection to the PostgreSQL database. These variables are set in the .env file:

-   db_host: The host address of the PostgreSQL database.
-   db_user: The username for the PostgreSQL database.
-   db_database: The name of thePostgreSQL database.
-   db_password: The password for the PostgreSQL database.
-   db_port: The port number for the PostgreSQL database (default is 5432).

# Project structure

```
├── app.js
├── views
│   ├── createUser.ejs
│   └── partials
│       └── errors.ejs
├── routes
│   └── userRouter.js
├── db
│   ├── pool.js
│   ├── populatedb.js
│   └── queries.js
├── controller
│   └── userController.js
├── package.json
└── .env

```

# File Descriptions

-   **app.js**: The main application file that initializes the Express app, sets up middleware, and defines the routes.
-   **views/createUser.ejs**: The EJS template for the "Create User" page.
-   **views/partials/errors.ejs**: A partial EJS template for displaying validation errors.
-   **routes/userRouter.js**: Defines the routes for user-related operations.
-   **db/pool.js**: Configures and exports a PostgreSQL connection pool.
-   **db/populatedb.js**: A script for populating the database with initial data.
-   **db/queries.js**: Contains functions for querying the PostgreSQL database.
-   **controller/userController.js**: Contains controller functions that handle user-related requests.

# Usage

## 1. Start the application

Starting the application is done through the node watch script

`npm run watch`

after that, the database can be populated using `db/populatedb.js`

`node db/populatedb.js`

This script will create the `usernames` table and insert some initial data.

# Routes

## GET /

    Description: Lists all usernames in the database.
    Controller: usersListGet
    Output: A list of usernames.

## GET /new

    Description: Renders the form for creating a new username.
    Controller: usersCreateGet
    View: createUser.ejs

## POST /new

    Description: Handles the creation of a new username.
    Controller: usersCreatePost
    Validation: The username must only contain letters and be between 1 and 10 characters long.
    Redirects: To / on success or re-renders the form with errors.

## GET /search

    Description: Searches for usernames containing a specific term.
    Controller: usersSearchGet
    Output: A JSON array of matching usernames.

## GET /delete

    Description: Deletes all usernames from the database.
    Controller: usersDeleteGet
    Output: A JSON response confirming the deletion.

# Database

## Table: usernames

    id: Integer, primary key, auto-incremented.
    username: String, up to 255 characters.

## Queries

    getAllUsernames: Fetches all usernames from the database.
    insertUsername: Inserts a new username into the database.
    searchUsers: Searches for usernames containing a specific term.
    deleteUsernames: Deletes all records in the usernames table.
