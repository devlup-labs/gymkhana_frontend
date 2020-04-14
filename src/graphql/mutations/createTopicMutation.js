import gql from "graphql-tag";

export const CREATE_TOPIC_MUTATION = gql`
  mutation createTopic($input: CreateTopicMutationInput!) {
    createTopic(input: $input) {
      clientMutationId
    }
  }
`;
