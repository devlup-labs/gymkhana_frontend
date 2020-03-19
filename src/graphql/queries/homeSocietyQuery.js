import gql from "graphql-tag";
import { SIZES_FRAGMENT } from "../fragments/sizesFregment";

export const GET_SOCIETIES_QUERY = gql`
  query {
    societies {
      edges {
        node {
          __typename
          ... on SocietyNode {
            name
            slug
            cover {
              ...sizesFields
            }
          }
        }
      }
    }
  }
  ${SIZES_FRAGMENT}
`;
