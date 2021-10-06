const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./app/routes/books.router'));

app.listen(3000);
console.log('Listening on port 3000');