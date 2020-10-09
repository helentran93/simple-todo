# simple-todo

Requirements
- PostgreSQL
- Node.js

Instructions
- Install PostgreSQL locally.
- Create a user `root` with privileges of creating database and tables. Remember to set `password` as the password.
- Create a database and name it `todo_db`.
- Install all the packages with command `npm install` in both `/backend` and `/frontend` directories.
- Run command `npm run migrate-db` to insert new tables to the database you just created.
- To run the server, go to `/backend` directory and run `npm start`. The server will be run from `http://localhost:8000`.
- To run the client, go to `/frontend` directory and run `npm start`. The app will be run from `http://localhost:3000`.