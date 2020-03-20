import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFregment";
import { NEWS_FRAGMENT } from "../fragments/newsFragment";
import { EVENT_FRAGMENT } from "../fragments/eventFragment";

export const GET_SOCIETIES_QUERY = gql`
  query {
    societies {
      edges {
        node {
          __typename
          ... on SocietyNode {
            name
            slug
            cover {
              ...sizesFields
            }
            clubSet {
              edges {
                node {
                  ...eventFields
                  ...newsFields
                }
              }
            }
          }
        }
      }
    }
  }
  ${SIZES_FRAGMENT}
  ${NEWS_FRAGMENT}
  ${EVENT_FRAGMENT}
`;
