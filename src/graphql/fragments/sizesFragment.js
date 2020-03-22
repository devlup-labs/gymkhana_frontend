import gql from "graphql-tag";

export const SIZES_FRAGMENT = gql`
  fragment Sizes on ImageType {
    sizes {
      name
      url
    }
  }
`;
