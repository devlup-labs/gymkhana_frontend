import gql from "graphql-tag";

export const GET_SOCIETY_DATA_QUERY = gql`
  query societies($slugText: String!) {
    societies(slug: $slugText) {
      edges {
        node {
          name
          secretary {
            phone
            cover
            avatar
            about
            user {
              firstName
              lastName
              email
            }
          }
          jointSecretary {
            phone
            cover
            avatar
            about
            user {
              firstName
              lastName
              email
            }
          }
          mentor {
            phone
            cover
            avatar
            about
            user {
              firstName
              lastName
              email
            }
          }
          slug
          clubSet {
            edges {
              node {
                name
                slug
                cover
                eventSet {
                  edges {
                    node {
                      name
                      description
                      location
                      date
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
