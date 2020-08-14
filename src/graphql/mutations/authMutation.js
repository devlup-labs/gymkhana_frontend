import gql from "graphql-tag";

export const AUTHORIZATION_MUTATION = gql`
  mutation Mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
