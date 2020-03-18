import gql from "graphql-tag";

export const GET_SOCIETY_DATA_QUERY = gql`
  query societies($slugText: String!) {
    societies(slug: $slugText) {
      edges {
        node {
          name
          description
          secretary {
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
          jointSecretary {
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
          mentor {
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
          slug
          cover {
            sizes {
              name
              url
            }
          }
          clubSet {
            edges {
              node {
                __typename
                name
                slug
                cover {
                  sizes {
                    name
                    url
                  }
                }
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
              }
            }
          }
        }
      }
    }
  }
`;
