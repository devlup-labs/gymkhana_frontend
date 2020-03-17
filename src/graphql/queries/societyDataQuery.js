import gql from "graphql-tag";

export const GET_SOCIETY_DATA_QUERY = gql`
  query societies($slugText: String!) {
    societies(slug: $slugText) {
      edges {
        node {
          name
          secretary {
            phone
            cover {
              sizes {
                url
              }
            }
            avatar {
              sizes {
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
                url
              }
            }
            avatar {
              sizes {
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
                url
              }
            }
            avatar {
              sizes {
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
