import gql from "graphql-tag";

export const GET_NEWS_QUERY = gql`
  query news($clubId: ID!) {
    news(club: $clubId) {
      edges {
        node {
          title
          club {
            name
            slug
            society {
              slug
            }
          }
          cover
          date
          author {
            user {
              firstName
              lastName
            }
          }
          content
        }
      }
    }
  }
`;
