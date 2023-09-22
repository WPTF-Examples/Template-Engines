const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use((req,res,next)=>{
  app.locals.currentRoute = req.path;
  next();
});

const HTTP_PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/viewData', function (req, res) {
  let someData = {
    name: 'John',
    age: 23,
    occupation: 'developer',
    company: 'Scotiabank',
  };

  res.render('viewData', {
    data: someData,
  });
});

app.listen(HTTP_PORT, () => { console.log(`server listening on: ${HTTP_PORT}`) });