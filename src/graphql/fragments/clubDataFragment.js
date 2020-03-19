import gql from "graphql-tag";

export const CLUB_DATA_FRAGMENT = gql`
  fragment clubDataFields on ClubNode {
    name
    slug
  }
`;
