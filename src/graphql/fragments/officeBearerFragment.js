import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "./sizesFragment";
import { SOCIAL_MEDIA_ICON_FRAGMENT } from "./socialMediaIconFragment";

export const OFFICE_BEARER_FRAGMENT = gql`
  fragment OfficeBearerFields on UserProfileNode {
    phone
    cover {
      ...Sizes
    }
    avatar {
      ...Sizes
    }
    about
    user {
      firstName
      lastName
      email
    }
    socialLinks {
      edges {
        node {
          ...SocialMedia
        }
      }
    }
  }
  ${SIZES_FRAGMENT}
  ${SOCIAL_MEDIA_ICON_FRAGMENT}
`;
