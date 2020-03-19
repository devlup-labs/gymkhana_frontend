import gql from "graphql-tag";

export const SIZES_FRAGMENT = gql`
  fragment sizesFields on ImageType {
    sizes {
      name
      url
    }
  }
`;
