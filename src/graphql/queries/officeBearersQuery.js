import gql from "graphql-tag";
import { OFFICE_BEARER_FRAGMENT } from "../fragments/officeBearerFragment";

export const GET_OFFICE_BEARERS_QUERY = gql`
  query societies {
    societies {
      edges {
        node {
          name
          secretary {
            ...officeBearerFields
          }
          jointSecretary {
            ...officeBearerFields
          }
          mentor {
            ...officeBearerFields
          }
        }
      }
    }
  }
  ${OFFICE_BEARER_FRAGMENT}
`;
