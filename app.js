console.log("it is started");
var express = require('express');
var todoController = require('./controllers/todoController');
var router = express.Router();


var app = express();
var port = "3000";
app.set('port', port);
app.listen(port, 3000);
console.log("app is listening to the 3000 port");


app.use(express.static('./public'));
//set template engine
app.set('view engine', 'ejs');
// app.engine('views', require('ejs').renderFile);  

// multiple middleware
/*app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })*/

  //middleware sub-stack that handles the GET request to the user:id path
  /*app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
  }, function (req, res, next) {
    res.send('User Info')
  })
  app.get('/user/:id', function (req, res, next) {
    res.send(req.params.id)
  })*/

  router.use(function (req, res, next) {
    if (!req.headers['x-auth']) return next('router')
    next()
  })
  
  router.get('/', function (req, res) {
    res.send('hello, user!')
  })
  app.use('/admin', router, function (req, res) {
    res.sendStatus(200)
  })

//fire controllers
todoController(app);

module.exports = app;