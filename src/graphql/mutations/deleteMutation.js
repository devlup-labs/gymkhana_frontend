import gql from "graphql-tag";

export const DELETE_MUTATION = gql`
  mutation delete($id: ID!, $isTopic: Boolean!) {
    delete(id: $id, isTopic: $isTopic) {
      deleted
    }
  }
`;
