const express = require('express');
const app = express();
const port = 1000;

app.use(express.urlencoded({ extended: true }));

const mainRouters = require('./routers');

app.use('/', mainRouters);
app.use('/Confirmation', mainRouters);
app.use('/ContactUs', mainRouters);
app.use('/mini-games', mainRouters);
app.use('/HireMe', mainRouters);
app.use('/Index-ar', mainRouters);
app.use('/dark_theme', mainRouters);
app.use('/script', mainRouters);
app.use('/E-books', mainRouters);
app.use('/form', mainRouters);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 