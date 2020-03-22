import gql from "graphql-tag";

export const EVENT_FRAGMENT = gql`
  fragment Event on EventNode {
    name
    description
    location
    date
  }
`;

export const CLUB_EVENTS_FRAGMENT = gql`
  fragment EventFields on ClubNode {
    eventSet {
      edges {
        node {
          ...Event
        }
      }
    }
  }
  ${EVENT_FRAGMENT}
`;
