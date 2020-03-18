import gql from "graphql-tag";

export const GET_CAROUSEL_IMAGES_QUERY = gql`
  query {
    carouselGallery(slug: "homepagecarousel") {
      edges {
        node {
          title
          description
          slug
          photos {
            edges {
              node {
                title
                image {
                  sizes {
                    url
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
