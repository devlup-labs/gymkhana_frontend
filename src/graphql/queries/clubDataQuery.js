import gql from "graphql-tag";

export const GET_CLUB_DATA_QUERY = gql`
  query clubs($slugText: String!) {
    clubs(slug: $slugText) {
      edges {
        node {
          name
          id
          society {
            name
          }
          slug
          cover {
            sizes {
              name
              url
            }
          }
          description
          captain {
            phone
            cover {
              sizes {
                name
                url
              }
            }
            avatar {
              sizes {
                name
                url
              }
            }
            about
            user {
              firstName
              lastName
              email
            }
          }
          viceCaptainOne {
            phone
            cover {
              sizes {
                name
                url
              }
            }
            avatar {
              sizes {
                name
                url
              }
            }
            about
            user {
              firstName
              lastName
              email
            }
          }
          viceCaptainTwo {
            phone
            cover {
              sizes {
                name
                url
              }
            }
            avatar {
              sizes {
                name
                url
              }
            }
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
                cover {
                  sizes {
                    name
                    url
                  }
                }
                avatar {
                  sizes {
                    name
                    url
                  }
                }
                about
                user {
                  firstName
                  lastName
                  email
                }
              }
            }
          }
          newsSet {
            edges {
              node {
                title
                cover {
                  sizes {
                    name
                    url
                  }
                }
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
          eventSet {
            edges {
              node {
                id
                name
                description
                location
                date
                club {
                  name
                  slug
                  society {
                    slug
                  }
                }
              }
            }
          }
          activitySet {
            edges {
              node {
                name
                description
                customHtml
              }
            }
          }
        }
      }
    }
  }
`;
