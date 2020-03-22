import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFragment";

export const GET_FESTIVAL_QUERY = gql`
  query {
    festivals {
      edges {
        node {
          name
          tagLine
          photo {
            ...Sizes
          }
          about
          slug
          link
        }
      }
    }
  }
  ${SIZES_FRAGMENT}
`;
