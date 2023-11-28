# Todo Application

This is a simple todo application with a PHP backend and a React frontend.

## Prerequisites

- Local Web Server
- Local Database Server
- [Node.js](https://nodejs.org/en/)

## Installation

You should start the backend first, because the frontend needs the backend to work properly.

### Backend

1. You need to install a local web server (e.g. [Apache](https://httpd.apache.org/)) and a local database server (e.g. [MySQL](https://www.mysql.com/)) on your computer.(Installing [XAMPP](https://www.apachefriends.org/tr/index.html) for Windows users is recommended, which includes both Apache and MySQL.)
2. Copy the backend folder into the htdocs folder of your local web server.
3. Configure the database connection in the file `backend/config/database/DatabaseConnector.php`.
4. Import the database dump `database.sql` into your local database server.

### Frontend

1. Clone the repository.
2. Open the terminal in the frontend folder.
3. Run `npm install` to install all dependencies.
4. Run `npm start` to start the development server.
5. Open `http://localhost:3000` in your browser.

**_PS:_** _This project is mainly focused on the frontend. The backend is just a simple API(No any security concern, or any database related topics etc)._
