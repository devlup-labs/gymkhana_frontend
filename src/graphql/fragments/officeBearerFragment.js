import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "./sizesFregment";

export const OFFICE_BEARER_FRAGMENT = gql`
  fragment officeBearerFields on UserProfileNode {
    phone
    cover {
      ...sizesFields
    }
    avatar {
      ...sizesFields
    }
    about
    user {
      firstName
      lastName
      email
    }
  }
  ${SIZES_FRAGMENT}
`;
