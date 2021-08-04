const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Trip {
    _id: ID
    destination: String
    startDate: Float
    organiser: ID
    # guests: []
    itinerary: [Activity]
  }

  type Activity {
    _id: ID
    date: Float
    activity: String
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    users: [User]
    trips: [Trip]
  }
`;

module.exports = typeDefs;