<template lang="pug">
  v-col(v-if="!$apollo.queries.topicsByUser.loading")
    v-row.justify-center.pa-6
      span.display-2 Answered By you
    v-row.justify-center( v-for="({node},i) in topicsByUser.edges" :key="i")
      v-col(cols="12" md="8" )
        ForumTopicCard(:topic="node.title" :slug="node.slug" :authorName="node.author.user.firstName.concat(\" \", node.author.user.lastName)"
          :authorInfo="node.author.prog.concat(\", \",node.author.branch,\", \",node.author.year)"
          :answerAuthorName="node.answerSet.edges[0].node.author.user.firstName.concat(\" \", node.author.user.lastName)"
          :answerTime="node.answersCount  ?timeSince(node.answerSet.edges[0].node.createdAt):null"
          :authorPic="node.author.avatar.sizes.find(e=>e.name=='full_size').url")
          template(v-slot:upVote)
            UpvoteButton.justify-lg-center.pl-10(:upvotes="node.upvotesCount" :upvoted="node.isUpvoted" v-on:upVote="upVoteClick(node.id,true)").justify-sm-end
          template(v-slot:answersCount)
            CommentsCounter(:answerCount="node.answersCount" :slug="node.slug")
          template(v-slot:deleteButton)
            TopicDeleteButton(v-if="node.isAuthor" v-on:delete_msg="deleteMethod(node.id,true)")
    v-row(v-if="!this.topicsByUser.edges.length").justify-center.headline There Are no answers currently

</template>

<script>
import ForumTopicCard from "./ForumTopicCard";
import { GET_TOPICS_ANSWERED_BY_USER_QUERY } from "../../graphql/queries/asnweredByUserQuery";
import moment from "moment";
import { UPVOTE_MUTATION } from "../../graphql/mutations/upVoteMutation";
import { DELETE_MUTATION } from "../../graphql/mutations/deleteMutation";
import CommentsCounter from "../common/buttons/CommentsCounter";
import UpvoteButton from "../common/buttons/UpvoteButton";
import TopicDeleteButton from "../common/buttons/TopicDeleteButton";

export default {
  apollo: {
    topicsByUser: {
      query: GET_TOPICS_ANSWERED_BY_USER_QUERY
    },
    $client: "private"
  },
  name: "QuestionsAnsweredByUser",
  components: {
    TopicDeleteButton,
    UpvoteButton,
    CommentsCounter,
    ForumTopicCard
  },
  methods: {
    timeSince(date) {
      return moment(date, "YYYYMMDDLTS").fromNow();
    },
    upVoteClick(id, isTopic) {
      this.$apollo.mutate({
        // Query
        mutation: UPVOTE_MUTATION,
        refetchQueries: [
          {
            query: GET_TOPICS_ANSWERED_BY_USER_QUERY
          }
        ],
        // Parameters
        variables: {
          id: id,
          isTopic: isTopic
        },
        client: "private"
      });
    },
    deleteMethod(id, is_topic) {
      this.$apollo.mutate({
        // Query
        mutation: DELETE_MUTATION,
        refetchQueries: [
          {
            query: GET_TOPICS_ANSWERED_BY_USER_QUERY
          }
        ],
        // Parameters
        variables: {
          id: id,
          isTopic: is_topic
        },
        client: "private"
      });
    },
    refetch() {
      this.$apollo.queries.topicsByUser.refetch;
    }
  },
  mounted() {
    this.refetch();
  }
};
</script>

<style scoped></style>
