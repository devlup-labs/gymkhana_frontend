import gql from "graphql-tag";

export const HEADER_SOCIETY_LIST_QUERY = gql`
  query societies {
    societies {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`;
