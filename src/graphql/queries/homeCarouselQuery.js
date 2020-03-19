import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFregment";

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
                  ...sizesFields
                }
              }
            }
          }
        }
      }
    }
  }
  ${SIZES_FRAGMENT}
`;
