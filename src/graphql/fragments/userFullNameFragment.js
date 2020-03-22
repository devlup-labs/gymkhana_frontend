import gql from "graphql-tag";

export const FULL_NAME_FRAGMENT = gql`
  fragment NameParts on UserNode {
    firstName
    lastName
  }
`;
