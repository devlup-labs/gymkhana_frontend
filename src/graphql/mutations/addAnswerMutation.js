import gql from "graphql-tag";

export const ADD_ANSWER_MUTATION = gql`
  mutation answer($input: AddAnswerMutationInput!) {
    addAnswer(input: $input) {
      answer {
        content
      }
      errors {
        messages
      }
    }
  }
`;
