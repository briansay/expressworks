//First Pass
var express = require('express');
var app = express();

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render(process.argv[3], {date: new Date().toDateString()});
});

app.get('/home', function (req, res) {
  res.render(process.argv[3], {date: new Date().toDateString()});
})

app.listen(Number(process.argv[2]));



//Official solution
// const express = require('express')
// const app = express()
// app.set('view engine', 'pug')
// app.set('views', process.argv[3])
// app.get('/home', function(req, res) {
//   res.render('index', {date: new Date().toDateString()})
// })
// app.listen(process.argv[2])
