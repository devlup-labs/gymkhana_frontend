import gql from "graphql-tag";
import { CLUB_EVENTS_FRAGMENT } from "../fragments/eventFragment";
import { CLUB_NEWS_FRAGMENT } from "../fragments/newsFragment";
import { CLUB_DATA_FRAGMENT } from "../fragments/clubDataFragment";
import { OFFICE_BEARER_FRAGMENT } from "../fragments/officeBearerFragment";

export const GET_CLUB_DATA_QUERY = gql`
  query clubs($slugText: String!) {
    clubs(slug: $slugText) {
      edges {
        node {
          ...clubDataFields
          description
          cover {
            ...sizesFields
          }
          captain {
            ...officeBearerFields
          }
          viceCaptainOne {
            ...officeBearerFields
          }
          viceCaptainTwo {
            ...officeBearerFields
          }
          viceCaptainThree {
            ...officeBearerFields
          }
          mentor {
            ...officeBearerFields
          }
          coreMembers {
            edges {
              node {
                ...officeBearerFields
              }
            }
          }
          ...newsFields
          ...eventFields
          activitySet {
            edges {
              node {
                name
                description
                customHtml
              }
            }
          }
          customHtml
        }
      }
    }
  }
  ${OFFICE_BEARER_FRAGMENT}
  ${CLUB_EVENTS_FRAGMENT}
  ${CLUB_NEWS_FRAGMENT}
  ${CLUB_DATA_FRAGMENT}
`;
