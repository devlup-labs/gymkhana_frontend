import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFragment";
import { FULL_NAME_FRAGMENT } from "../fragments/userFullNameFragment";

export const SEARCH_USER_PROFILE_QUERY = gql`
  query Search($query: String!) {
    nodes(query: $query, nodeType: USER_PROFILE) {
      edges {
        node {
          ... on UserProfileNode {
            roll
            user {
              ...NameParts
            }
            skills
            avatar {
              ...Sizes
            }
          }
        }
      }
    }
  }
  ${SIZES_FRAGMENT}
  ${FULL_NAME_FRAGMENT}
`;
