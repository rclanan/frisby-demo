// Shows testing header and status code
var frisby = require('frisby');

frisby.create('JSONPlaceholder - Posts API test: GET /posts')
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .toss();
