/*
CS 290 Web Development
Final Project
Author: Nicole Miller
Date: 2/29/2020
File: form.js
*/

/**Set up the environment */
/**Load express module */
var express = require('express');
var app = express();

// /**Load handlebars */
// var handlebars = require('express-handlebars').create({ mainLayout: 'main' });
// app.engine('handlebars', handlebars.engine);
// app.set('view engine', 'handlebars');

/*JSON body parser middleware*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**Set up the port from which to listen. */
app.set('port', 3000);

// /**Handler for GET requests */
// app.get('/', function (req, res) {

//   /*array to hold paramaters from get req*/
//   var getData = [];

//   /*Loop through the passed query string*/
//   for (var data in req.query) {

//     /**Push the query string from the get request to the
//      * getData array.
//      */
//     getData.push({ 'parameter': data, 'value': req.query[data] })
//   }

//   /**Add the array data to the context.dataList */
//   var context = {};
//   context.dataList = getData;

//   /**The isGetRequest prototype is set to true
//    * when context is set from the get request handler.
//    */
//   context.isGetRequest = 1;

//   /**Render the html page */
//   res.render('home', context);
// });

/*Handler for the POST request*/
app.post('/', function (req, res) {
  /*array to hold paramaters from post req*/
  var postData = [];

  /*Loop through the body data*/
  for (var data in req.body) {

    /*push the body data from the post request to the
    postData array.*/
    postData.push({ 'parameter': data, 'value': req.body[data] })
  }

  console.log(postData);
  console.log(req.body);

  /**Add the array data to the context.dataList */
  var context = {};
  context.dataList = postData;

//   /**The isPostRequest prototype is set to true
//  * when context is set from the post request handler.
//  */
//   context.isPostRequest = 1;

//   /**If the request Content-Type is application/json
//    * the isJson prototype is set to true
//    */

//   if (req.is('application/json')) {
//     context.isJson = 1;
//   }

  /**Render the html page */
  res.render('home', context);
});


/**Handler for other-page */
app.get('/other-page', function (req, res) {
  res.render('other-page');
});

/*Handler for 404 page*/
app.use(function (req, res) {
  res.status(404);
  res.render('404');
});

/**Hander for 500 page */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});