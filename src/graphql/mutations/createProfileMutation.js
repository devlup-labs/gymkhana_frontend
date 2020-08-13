import gql from "graphql-tag";

export const CREATE_PROFILE_MUTATION = gql`
  mutation mutation($input: CreateProfileMutationInput!) {
    createProfile(input: $input) {
      userProfile {
        gender
      }
    }
  }
`;
