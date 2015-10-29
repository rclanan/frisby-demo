// Test Returned types
var frisby = require('frisby');

// All items
frisby.create('JSONPlaceholder - Posts API test: GET /posts')
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes('*', {
    userId: Number,
    id: Number,
    title: String,
    body: String
  })
  .toss();

// Single item - from array
frisby.create('JSONPlaceholder - Posts API test: GET /posts')
  .get('http://jsonplaceholder.typicode.com/posts')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes('?', {
    userId: Number,
    id: Number,
    title: String,
    body: String
  })
  .toss();
