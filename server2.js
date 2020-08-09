const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL Schema

let schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  }
  type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);


app.listen(4000, () => {
  console.log('Listening on port 4000');
});
