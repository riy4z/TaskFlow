# TaskFlow

TaskFlow is a simple to-do list application built using Express.js, EJS for server-side rendering, and PostgreSQL for database management. This project was created as a fun way to learn more about server-side rendering with EJS and managing a PostgreSQL database with pgAdmin.

## Features

- **Add Tasks**: Quickly add tasks to your list.
- **Edit Tasks**: Update existing tasks with new details.
- **Delete Tasks**: Remove tasks from the list.
- **Persistent Storage**: All tasks are stored in a PostgreSQL database.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- PostgreSQL
- pgAdmin (optional, for database management)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/taskflow.git
   cd taskflow
   ```

2. Install the dependencies:

```npm install```

3. Set up the PostgreSQL database:

Create a database named taskflow.
Use pgAdmin or a similar tool to create a table items with columns id (serial, primary key) and title (text).

4. Update the database credentials in the index.js file:

```bash
const db = new pg.Client({
  database: "taskflow",
  user: "your_database_user",
  password: "your_database_password",
  host: "localhost",
  port: 5432,
});

```

5. Start the server

```bash
node index.js
```
Open your browser and navigate to http://localhost:3000 to see the application in action.

### Acknowledgments
This project was created as a learning experience to explore server-side rendering with EJS and PostgreSQL database management.