import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFregment";

export const GET_FESTIVAL_QUERY = gql`
  query {
    festivals {
      edges {
        node {
          name
          tagLine
          photo {
            ...sizesFields
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
