const express = require('express')
const app = express()
require('dotenv').config()
const http = require('http').createServer(app);
const PORT = process.env.SERVER_PORT;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

console.log(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`)