import gql from "graphql-tag";
import { SOCIAL_MEDIA_ICON_FRAGMENT } from "./socialMediaIconFragment";
import { SIZES_FRAGMENT } from "./sizesFragment";

export const USER_PROFILE_DATA_FRAGMENT = gql`
  fragment UserProfile on UserProfileNode {
    socialLinks {
      edges {
        node {
          ...SocialMedia
        }
      }
    }
    roll
    gender
    phone
    dob
    prog
    year
    branch
    hometown
    cover {
      ...Sizes
    }
    avatar {
      ...Sizes
    }
    skills
    about
  }
  ${SOCIAL_MEDIA_ICON_FRAGMENT}
  ${SIZES_FRAGMENT}
`;
