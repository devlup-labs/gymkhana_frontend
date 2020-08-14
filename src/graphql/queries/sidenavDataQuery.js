import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFragment";
import { FULL_NAME_FRAGMENT } from "../fragments/userFullNameFragment";

export const GET_SIDENAV_DATA_QUERY = gql`
  query {
    viewer {
      ...NameParts
      email
      userprofile {
        cover {
          ...Sizes
        }
        avatar {
          ...Sizes
        }
      }
    }
  }
  ${SIZES_FRAGMENT}
  ${FULL_NAME_FRAGMENT}
`;
