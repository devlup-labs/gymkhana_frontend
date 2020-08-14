import gql from "graphql-tag";
import { FULL_NAME_FRAGMENT } from "../fragments/userFullNameFragment";
import { USER_PROFILE_DATA_FRAGMENT } from "../fragments/userProfileDataFragment";

export const GET_USER_PROFILE_QUERY = gql`
  query profile($roll: String!) {
    profile(roll: $roll) {
      edges {
        node {
          user {
            username
            ...NameParts
            email
            userprofile {
              ...UserProfile
            }
          }
        }
      }
    }
  }
  ${FULL_NAME_FRAGMENT}
  ${USER_PROFILE_DATA_FRAGMENT}
`;
