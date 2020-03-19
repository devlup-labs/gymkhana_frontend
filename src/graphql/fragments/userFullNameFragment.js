import gql from "graphql-tag";

export const FULL_NAME_FRAGMENT = gql`
  fragment nameFields on UserNode {
    firstName
    lastName
  }
`;
