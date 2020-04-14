import gql from "graphql-tag";
import { TOPIC_DATA_FRAGMENT } from "../fragments/topicDataFragment";
import { FULL_NAME_FRAGMENT } from "../fragments/userFullNameFragment";
import { SIZES_FRAGMENT } from "../fragments/sizesFragment";

export const GET_TOPIC_QUERY = gql`
  query topic($slug: String!) {
    topic(slug: $slug) {
      edges {
        node {
          content
          tags
          ...TopicData
          author {
            user {
              ...NameParts
            }
            avatar {
              ...Sizes
            }
          }
          answerSet {
            edges {
              node {
                id
                content
                upvotesCount
                isAuthor
                isUpvoted
                createdAt
                author {
                  user {
                    ...NameParts
                  }
                  avatar {
                    ...Sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${TOPIC_DATA_FRAGMENT}
  ${FULL_NAME_FRAGMENT}
  ${SIZES_FRAGMENT}
`;
