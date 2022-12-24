<?php

// Connect to the database
$db = new PDO('mysql:host=localhost;dbname=mydatabase', 'username', 'password');

// Check if the form was submitted
if (isset($_POST['submit'])) {
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $project = $_POST['project'];
  $message = $_POST['message'];

  // Insert the data into the database
  $query = $db->prepare("INSERT INTO contact_form (name, email, project, message) VALUES (?, ?, ?, ?)");
  $query->execute(array($name, $email, $project, $message));
}

?>
