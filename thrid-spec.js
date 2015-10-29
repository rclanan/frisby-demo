// Test returned data
var frisby = require('frisby');

// Single item
frisby.create('JSONPlaceholder - Posts API test: GET /posts/1')
  .get('http://jsonplaceholder.typicode.com/posts/1')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSONTypes({
    userId: Number,
    id: Number,
    title: String,
    body: String
  })
  .expectJSON({
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  })
  .toss();
