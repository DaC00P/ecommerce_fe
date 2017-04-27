'use strict';

const Express = require('express');
const Server = Express();
const Path = require('path');
const BodyParser = require('body-parser');

Server.use(BodyParser.urlencoded({
  extended: true,
  parameterLimit: 1000,
  limit: 1024 * 1024 * 10
}));

Server.use(BodyParser.json({
  extended: false,
  parameterLimit: 1000,
  limit: 1024 * 1024 * 10
}));

const mockProducts = {products: [{name: 'ball', description: 'big red ball', numberRemaining: 2, categories: ['sports', 'balls', 'bouncy toys'], price: 5},
                                  {name: 'chew bone', description: 'doggie chew bone', numberRemaining: 5, categories: ['pets', 'pet toys'], price: 3},
                                  {name: 'doll', description: 'a cool hipster doll wearing plaid', numberRemaining: 1, categories: ['dolls'], price: 5},
                                  {name: 'ferrari', description: 'because adults need toys too', numberRemaining: 11, categories: ['adult toys', 'cars', 'luxery'], price: 100000}]}


Server.get('/products', function(req, res){
  res.json(mockProducts);
});


Server.listen( process.env.PORT || 8003, function(){
  console.log('Server Running');
});

// FOR LIVE SERVER
// Server.listen(process.env.PORT, function(){
//   console.log('Server Running');
// });


// FOR DEV SERVER
Server.listen(8000, function(){
  console.log('Server Running');
});
