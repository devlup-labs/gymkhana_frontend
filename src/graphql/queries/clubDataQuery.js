import gql from "graphql-tag";

export const GET_CLUB_DATA_QUERY = gql`
  query clubs($slugText: String!) {
    clubs(slug: $slugText) {
      edges {
        node {
          name
          society {
            name
          }
          slug
          cover
          description
          captain {
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
          viceCaptainOne {
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
          viceCaptainTwo {
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
          coreMembers {
            edges {
              node {
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
            }
          }
        }
      }
    }
  }
`;
