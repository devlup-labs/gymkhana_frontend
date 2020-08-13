import gql from "graphql-tag";

export const G_SIGN_IN_MUTATION = gql`
  mutation Mutation($accessToken: String!, $provider: String!) {
    socialAuth(accessToken: $accessToken, provider: $provider) {
      token
      social {
        user {
          userprofile {
            id
          }
        }
      }
    }
  }
`;
