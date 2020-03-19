import gql from "graphql-tag";
import { FULL_NAME_FRAGMENT } from "./userFullNameFragment";

export const NEWS_FRAGMENT = gql`
  fragment newsFields on ClubNode {
    newsSet {
      edges {
        node {
          title
          cover {
            ...sizesFields
          }
          date
          author {
            user {
              ...nameFields
            }
          }
          content
        }
      }
    }
  }
  ${FULL_NAME_FRAGMENT}
`;
