import gql from "graphql-tag";
import { FULL_NAME_FRAGMENT } from "../fragments/userFullNameFragment";
import { SIZES_FRAGMENT } from "../fragments/sizesFragment";
import { TOPIC_DATA_FRAGMENT } from "../fragments/topicDataFragment";

export const GET_FORUM_TOPICS_QUERY = gql`
  query Search($query: String!, $first: Int, $last: Int) {
    search(query: $query, nodeType: TOPIC, first: $first, last: $last) {
      pageInfo {
        hasNextPage
      }
      totalCount
      edgeCount
      edges {
        node {
          ... on TopicNode {
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
  }
  ${FULL_NAME_FRAGMENT}
  ${SIZES_FRAGMENT}
  ${TOPIC_DATA_FRAGMENT}
`;
