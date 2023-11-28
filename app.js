const express = require('express');
const app = express();
const port = 1000;

app.get('/', (req, res) => {
    res.send('Welcome to E-Knowledge Store');
  });

  app.get('/top-selling', (req, res) => {
    res.send('View our top selling books');
  });

  app.get('/about', (req, res) => {
    res.send('Learn more about E-Knowledge Store');
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});