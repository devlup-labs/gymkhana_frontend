import gql from "graphql-tag";

export const GET_FESTIVAL_QUERY = gql`
  query {
    festivals {
      edges {
        node {
          name
          tagLine
          photo {
            sizes {
              name
              url
            }
          }
          about
          slug
          link
        }
      }
    }
  }
`;
