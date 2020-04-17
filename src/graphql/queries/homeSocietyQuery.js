import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFragment";
import { NEWS_FRAGMENT } from "../fragments/newsFragment";
import { EVENT_FRAGMENT } from "../fragments/eventFragment";

export const GET_SOCIETIES_QUERY = gql`
  query {
    societies(isActive: true) {
      edges {
        node {
          __typename
          ... on SocietyNode {
            name
            slug
            cover {
              ...Sizes
            }
            pastNews {
              edges {
                node {
                  ...News
                }
              }
            }
            upcomingEvents {
              edges {
                node {
                  ...Event
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
