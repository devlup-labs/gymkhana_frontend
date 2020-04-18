import gql from "graphql-tag";

export const TOPIC_DATA_FRAGMENT = gql`
  fragment TopicData on TopicNode {
    id
    title
    isAuthor
    isUpvoted
    upvotesCount
    answersCount
    createdAt
  }
`;
