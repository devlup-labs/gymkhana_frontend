import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFregment";

export const SEARCH_USER_PROFILE_QUERY = gql`
  query Search($query: String!) {
    search(query: $query, nodeType: USER_PROFILE) {
      edges {
        node {
          ... on UserProfileNode {
            user {
              firstName
              lastName
            }
            skills
            avatar {
              ...sizesFields
            }
          }
        }
      }
    }
  }
  ${SIZES_FRAGMENT}
`;
