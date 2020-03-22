import gql from "graphql-tag";
import { GALLERY_FRAGMENT } from "../fragments/galleryFragment";

export const GET_HOME_CAROUSEL_GALLERY_QUERY = gql`
  query {
    homeCarouselGallery {
      ...Gallery
    }
  }
  ${GALLERY_FRAGMENT}
`;
