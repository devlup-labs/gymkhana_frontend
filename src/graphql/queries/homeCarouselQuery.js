import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFragment";

export const GET_HOME_GALLERY_QUERY = gql`
  query {
    homeGallery {
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
  }
  ${SIZES_FRAGMENT}
`;
