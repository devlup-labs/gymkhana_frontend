import gql from "graphql-tag";

export const CLUB_DATA_FRAGMENT = gql`
  fragment ClubDataFields on ClubNode {
    name
    slug
  }
`;
