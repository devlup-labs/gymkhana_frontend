import gql from "graphql-tag";

export const GET_SOCIETY_DATA_QUERY = gql`
  query societies($slugText: String!) {
    societies(slug: $slugText) {
      edges {
        node {
          name
          secretary {
            user {
              firstName
              lastName
            }
          }
          jointSecretary {
            user {
              firstName
              lastName
            }
          }
          mentor {
            user {
              firstName
              lastName
            }
          }
          slug
          clubSet {
            edges {
              node {
                name
                slug
                cover
              }
            }
          }
        }
      }
    }
  }
`;
