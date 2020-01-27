import gql from "graphql-tag";

export const GET_SOCIETIES_QUERY = gql`
  query {
    societies {
      edges {
        node {
          ... on SocietyNode {
            name
            cover
            slug
          }
        }
      }
    }
  }
`;
