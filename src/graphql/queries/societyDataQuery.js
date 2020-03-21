import gql from "graphql-tag";
import { OFFICE_BEARER_FRAGMENT } from "../fragments/officeBearerFragment";
import { SIZES_FRAGMENT } from "../fragments/sizesFregment";
import { EVENT_FRAGMENT } from "../fragments/eventFragment";
import { NEWS_FRAGMENT } from "../fragments/newsFragment";
import { CLUB_DATA_FRAGMENT } from "../fragments/clubDataFragment";

export const GET_SOCIETY_DATA_QUERY = gql`
  query societies($slugText: String!) {
    societies(slug: $slugText) {
      edges {
        node {
          name
          description
          secretary {
            ...officeBearerFields
          }
          jointSecretary {
            ...officeBearerFields
          }
          mentor {
            ...officeBearerFields
          }
          slug
          cover {
            ...sizesFields
          }
          clubSet {
            edges {
              node {
                __typename
                ...clubDataFields
                cover {
                  ...sizesFields
                }
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
          pastNews {
            edges {
              node {
                ...News
              }
            }
          }
        }
      }
    }
  }
  ${OFFICE_BEARER_FRAGMENT}
  ${SIZES_FRAGMENT}
  ${EVENT_FRAGMENT}
  ${NEWS_FRAGMENT}
  ${CLUB_DATA_FRAGMENT}
`;
