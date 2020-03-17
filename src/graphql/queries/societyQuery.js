import gql from "graphql-tag";

export const GET_SOCIETIES_QUERY = gql`
  query {
    societies {
      edges {
        node {
          __typename
          ... on SocietyNode {
            name
            slug
            cover {
              sizes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
