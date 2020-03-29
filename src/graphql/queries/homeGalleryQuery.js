import gql from "graphql-tag";
import { GALLERY_FRAGMENT } from "../fragments/galleryFragment";

export const GET_HOME_GALLERY_QUERY = gql`
  query {
    homeGallery {
      ...Gallery
    }
  }
  ${GALLERY_FRAGMENT}
`;
