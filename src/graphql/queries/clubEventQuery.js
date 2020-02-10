import gql from "graphql-tag";

export const GET_CLUB_EVENT_QUERY = gql`
  query clubEvents($clubEventId: ID!) {
    clubEvents(club: $clubEventId) {
      edges {
        node {
          id
          name
          description
          location
          date
          club {
            name
            slug
            society {
              slug
            }
          }
        }
      }
    }
  }
`;
