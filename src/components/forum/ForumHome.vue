<template lang="pug">
  v-flex.fill-height
    v-container
      v-row.justify-center
        v-col(cols="12" ).justify-center
          v-col(lg="8" ).offset-lg-2
            v-row.align-center
              v-text-field(
                v-model="searchTerm"
                outline
                prepend-inner-icon="mdi-magnify"
                label="Search Forum for Topics"
                clearable
                @click:clear="clearSearchTerm")
              v-btn(color="primary" ).mb-2
                v-icon mdi-magnify
          v-divider.mb-5
          v-row.justify-center(v-if="!this.$apollo.queries.loading")
            v-col(cols="12" md="10" xs="12" v-for="(node,x) in this.topics" :key="x")
              ForumTopicCard(
                :topic="node.title"
                :slug="node.slug"
                :authorName="authorName(node.author.user)"
                :authorInfo="authorInfo(node)"
                :answerAuthorName="answerAuthorName(node)"
                :answerTime="node.answersCount  ? timeSince(node.answerSet.edges[0].node.createdAt) : null"
                :authorPic="node.author.avatar.sizes.length?node.author.avatar.sizes.find(e=>e.name==='full_size').url:require('@/assets/avatar_default.png')")
                template(v-slot:upVote)
                  UpvoteButton.justify-lg-center.pl-10(:upvotes="node.upvotesCount" :upvoted="node.isUpvoted" v-on:upVote="upVoteClick(node.id,true)").justify-sm-end
                template(v-slot:answersCount)
                  CommentsCounter(:answerCount="node.answersCount" :slug="node.slug")
                template(v-slot:deleteButton)
                  TopicDeleteButton(v-if="node.isAuthor" v-on:delete_msg="deleteMethod(node.id,true)")
    v-container.mt-5(v-if="nodes&&nodes.pageInfo.hasNextPage")
      v-row.justify-center
        v-btn(@click="updateEndCursor" text) Show More
    v-dialog(v-model="dialog" persistent max-width="700px" )
      AddTopicDialog(v-on:create="createTopic")
        template(v-slot:cross)
          v-btn(icon @click="toggleDialog")
            v-icon mdi-close
    v-tooltip(left color="black")
      template(v-slot:activator="{ on }")
        v-btn.mr-5.mb-12(
          color="primary"
          v-on="on"
          @click="toggleDialog"
          dark
          fixed
          bottom
          right
          fab).ma-5
          v-icon(large) mdi-plus
      span Add a topic


</template>

<script>
import ForumTopicCard from "./ForumTopicCard";
import AddTopicDialog from "./AddTopicDialog";
import { GET_FORUM_TOPICS_QUERY } from "../../graphql/queries/forumTopicsQuery";
import UpvoteButton from "../common/buttons/UpvoteButton";
import CommentsCounter from "../common/buttons/CommentsCounter";
import TopicDeleteButton from "../common/buttons/TopicDeleteButton";
import moment from "moment";
import { UPVOTE_MUTATION } from "../../graphql/mutations/upVoteMutation";
import { CREATE_TOPIC_MUTATION } from "../../graphql/mutations/createTopicMutation";
import { DELETE_MUTATION } from "../../graphql/mutations/deleteMutation";

export default {
  apollo: {
    nodes: {
      query: GET_FORUM_TOPICS_QUERY,
      variables() {
        return {
          query: this.searchTerm,
          first: 10,
          after: this.endCursor
        };
      },
      fetchPolicy: "no-cache",
      skip() {
        return this.searchTerm === null;
      },
      result(data) {
        if (!this.topics.length && !this.searchTerm.length) {
          data.data.nodes.edges.forEach(({ node }) => this.topics.push(node));
        } else {
          if (!this.endCursor) this.topics.length = 0;
          data.data.nodes.edges.forEach(({ node }) => this.topics.push(node));
        }
      }
    },
    $client: "private"
  },
  name: "Forum",
  components: {
    TopicDeleteButton,
    CommentsCounter,
    UpvoteButton,
    AddTopicDialog,
    ForumTopicCard
  },
  data: () => ({
    searchTerm: "",
    dialog: false,
    endCursor: "",
    topics: []
  }),
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    },
    clearSearchTerm() {
      this.searchTerm = "";
    },
    authorName(user) {
      return user.firstName.concat(" ", user.lastName);
    },
    authorInfo(node) {
      return node.author.prog.concat(
        ", ",
        node.author.branch,
        ", ",
        node.author.year
      );
    },
    answerAuthorName(node) {
      if (node.answerSet.edges.length)
        return this.authorName(node.answerSet.edges[0].node.author.user);
      else return null;
    },
    timeSince(date) {
      return moment(date, "YYYYMMDDLTS").fromNow();
    },
    upVoteClick(id, isTopic) {
      var temp = [...this.topics];
      var node = temp[temp.indexOf(temp.find(node => node.id === id))];
      node.isUpvoted = !node.isUpvoted;
      node.upvotesCount += node.isUpvoted ? 1 : -1;
      this.topics.length = 0;
      this.topics = [...temp];

      this.$apollo.mutate({
        // Query
        mutation: UPVOTE_MUTATION,
        // Parameters
        variables: {
          id: id,
          isTopic: isTopic
        },
        client: "private"
      });
    },
    createTopic(category, title, tags, content) {
      this.toggleDialog();
      this.$apollo
        .mutate({
          // Query
          mutation: CREATE_TOPIC_MUTATION,
          // Parameters
          variables: {
            input: {
              category: category,
              title: title,
              tags: tags,
              content: content
            }
          },
          client: "private"
        })
        .then(data => {
          this.topics.unshift(data.data.createTopic.topic);
        });
    },
    deleteMethod(id, is_topic) {
      this.$apollo
        .mutate({
          // Query
          mutation: DELETE_MUTATION,
          // Parameters
          variables: {
            id: id,
            isTopic: is_topic
          },
          client: "private"
        })
        .then(data => {
          if (data.data.delete.deleted) {
            this.topics.splice(
              this.topics.indexOf(this.topics.find(node => node.id === id)),
              1
            );
            var temp = [...this.topics];
            this.topics.length = 0;
            this.topics = [...temp];
          }
        });
    },
    updateEndCursor() {
      this.flag = true;
      this.endCursor = this.nodes.pageInfo.endCursor;
    },
    refetchQueries() {
      this.$apollo.queries.nodes.refetch({});
    }
  },
  watch: {
    searchTerm() {
      if (this.searchTerm === null) {
        this.searchTerm = "";
      }
      this.endCursor = "";
    }
  }
};
</script>

<style scoped></style>
