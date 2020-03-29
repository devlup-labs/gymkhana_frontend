import gql from "graphql-tag";
import { GALLERY_FRAGMENT } from "../fragments/galleryFragment";

export const GET_HOME_CAROUSEL_QUERY = gql`
  query {
    homeCarousel {
      ...Gallery
    }
  }
  ${GALLERY_FRAGMENT}
`;
