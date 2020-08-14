import gql from "graphql-tag";

export const UPVOTE_MUTATION = gql`
  mutation upVote($id: ID!, $isTopic: Boolean!) {
    upvote(id: $id, isTopic: $isTopic) {
      updated
      upvoted
    }
  }
`;
