const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Parse form data from the request body
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
  // Get the form data
  const name = req.body.name;
  const email = req.body.email;
  const project = req.body.project;
  const message = req.body.message;

  // Connect to the database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'mydatabase'
  });

  // Insert the data into the database
  connection.query(
    'INSERT INTO contact_form (name, email, project, message) VALUES (?, ?, ?, ?)',
    [name, email, project, message],
    (error, results) => {
      if (error) {
        // Handle error
      } else {
        // Form submission successful, display confirmation message
      }
    }
  );
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
