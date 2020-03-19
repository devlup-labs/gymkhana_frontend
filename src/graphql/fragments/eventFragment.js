import gql from "graphql-tag";

export const EVENT_FRAGMENT = gql`
  fragment eventFields on ClubNode {
    eventSet {
      edges {
        node {
          name
          description
          location
          date
        }
      }
    }
  }
`;
