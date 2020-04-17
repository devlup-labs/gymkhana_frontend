import gql from "graphql-tag";
import { OFFICE_BEARER_FRAGMENT } from "../fragments/officeBearerFragment";

export const GET_OFFICE_BEARERS_QUERY = gql`
  query societies {
    societies(isActive: true) {
      edges {
        node {
          name
          secretary {
            ...OfficeBearerFields
          }
          jointSecretary {
            ...OfficeBearerFields
          }
          mentor {
            ...OfficeBearerFields
          }
        }
      }
    }
  }
  ${OFFICE_BEARER_FRAGMENT}
`;
