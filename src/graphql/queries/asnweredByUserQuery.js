import gql from "graphql-tag";
import { FULL_NAME_FRAGMENT } from "../fragments/userFullNameFragment";
import { SIZES_FRAGMENT } from "../fragments/sizesFragment";
import { TOPIC_DATA_FRAGMENT } from "../fragments/topicDataFragment";

export const GET_TOPICS_ANSWERED_BY_USER_QUERY = gql`
  query topicsByUser {
    topicsByUser {
      edges {
        node {
          slug
          answersCount
          ...TopicData
          author {
            user {
              ...NameParts
            }
            avatar {
              ...Sizes
            }
            year
            prog
            branch
          }
          answerSet(first: 1) {
            edges {
              node {
                createdAt
                content
                author {
                  user {
                    ...NameParts
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${FULL_NAME_FRAGMENT}
  ${SIZES_FRAGMENT}
  ${TOPIC_DATA_FRAGMENT}
`;
