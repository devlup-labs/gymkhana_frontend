import gql from "graphql-tag";
import { FULL_NAME_FRAGMENT } from "./userFullNameFragment";
import { SIZES_FRAGMENT } from "./sizesFregment";

export const NEWS_FRAGMENT = gql`
  fragment News on NewsNode {
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
  ${SIZES_FRAGMENT}
  ${FULL_NAME_FRAGMENT}
`;

export const CLUB_NEWS_FRAGMENT = gql`
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
