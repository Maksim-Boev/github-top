import { gql } from '@apollo/client';

const GET_USERS = gql`
  {
    search(query: "location:kyiv", type: USER, first: 10) {
      edges {
        node {
          ... on User {
            id
            name
            bio
            url
            email
            location
            avatarUrl
            login
          }
        }
      }
    }
  }
`;

export default GET_USERS;
