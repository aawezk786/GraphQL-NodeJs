const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL Schema

let schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Root resolver
let root = {
  message: () => 'Hello World!'
};

// Create an Express server and GraphQL endpoint

let app = express();
app.use('/graphql', express_graphql({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening on port 4000')
});
