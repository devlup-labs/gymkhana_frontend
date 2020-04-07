import gql from "graphql-tag";

export const UPDATE_PROFILE_MUTATION = gql`
  mutation mutation($input: ProfileMutationInput!) {
    updateProfile(input: $input) {
      errors {
        messages
      }
      userProfile {
        year
      }
    }
  }
`;
