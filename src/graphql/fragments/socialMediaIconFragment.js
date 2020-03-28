import gql from "graphql-tag";

export const SOCIAL_MEDIA_ICON_FRAGMENT = gql`
  fragment SocialMedia on SocialLinks {
    socialMedia
    link
  }
`;
