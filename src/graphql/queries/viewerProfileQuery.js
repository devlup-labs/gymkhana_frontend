import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFragment";
import { FULL_NAME_FRAGMENT } from "../fragments/userFullNameFragment";
import { SOCIAL_MEDIA_ICON_FRAGMENT } from "../fragments/socialMediaIconFragment";

export const VIEWER_PROFILE_QUERY = gql`
  query {
    viewer {
      username
      ...NameParts
      email
      userprofile {
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
        skills
        about
      }
    }
  }
  ${SIZES_FRAGMENT}
  ${FULL_NAME_FRAGMENT}
  ${SOCIAL_MEDIA_ICON_FRAGMENT}
`;
