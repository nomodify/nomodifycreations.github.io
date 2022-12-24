const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      // write form data to a temporary file
      fs.writeFileSync('form-data.txt', body);

      // spawn a child process to run the Python script
      const pythonProcess = spawn('python', ['process-form.py']);

      // send the response back to the client
      res.end('Form data received and processed by Python script.');
    });
  } else {
    res.end('This server only supports POST requests.');
  }
}).listen(3000);
