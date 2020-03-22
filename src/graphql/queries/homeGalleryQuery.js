import gql from "graphql-tag";
import { GALLERY_FRAGMENT } from "../fragments/galleryFragment";

export const GET_HOME_GALLERY_QUERY = gql`
  query {
    gallery {
      ...Gallery
    }
  }
  ${GALLERY_FRAGMENT}
`;
