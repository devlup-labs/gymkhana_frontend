import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "./sizesFragment";

export const GALLERY_FRAGMENT = gql`
  fragment Gallery on GalleryNode {
    title
    description
    slug
    photos {
      edges {
        node {
          title
          image {
            ...Sizes
          }
        }
      }
    }
  }
  ${SIZES_FRAGMENT}
`;
