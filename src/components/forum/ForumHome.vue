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
          v-row.justify-center(v-if="search")
            v-col(cols="12" md="10" xs="12" v-for="({node},x) in this.search.edges" :key="x")
              ForumTopicCard(:topic="node.title" :slug="node.slug" :authorName="authorName(node)" :authorInfo="authorInfo(node)" :answerAuthorName="answerAuthorName(node)"
                :answerTime="node.answersCount  ?timeSince(node.answerSet.edges[0].node.createdAt):null"
                :authorPic="node.author.avatar.sizes.find(e=>e.name=='full_size').url")
                template(v-slot:upVote)
                  UpvoteButton.justify-lg-center.pl-10(:upvotes="node.upvotesCount" :upvoted="node.isUpvoted" v-on:upVote="upVoteClick(node.id,true)").justify-sm-end
                template(v-slot:answersCount)
                  CommentsCounter(:answerCount="node.answersCount")
                template(v-slot:deleteButton)
                  TopicDeleteButton(v-if="node.isAuthor")
    v-container.mt-5
        v-pagination(circle :length="pages" v-model="page" total-visible="7" next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left")
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

export default {
  apollo: {
    search: {
      query: GET_FORUM_TOPICS_QUERY,
      variables() {
        return {
          query: this.searchTerm,
          first: this.page * 3,
          last: 3
        };
      },
      skip() {
        return this.searchTerm === null;
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
    page: 1,
    dialog: false
  }),
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    },
    authorName(node) {
      return node.author.user.firstName.concat(" ", node.author.user.lastName);
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
        return this.authorName(node.answerSet.edges[0].node);
      else return null;
    },
    timeSince(date) {
      return moment(date, "YYYYMMDDLTS").fromNow();
    },
    upVoteClick(id, isTopic) {
      this.$apollo.mutate({
        // Query
        mutation: UPVOTE_MUTATION,
        refetchQueries: [
          {
            query: GET_FORUM_TOPICS_QUERY,
            variables: {
              query: this.searchTerm,
              first: this.page * 3,
              last: 3
            }
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
    clearSearchTerm() {
      this.searchTerm = "";
    },
    createTopic(category, title, tags, content) {
      this.$apollo.mutate({
        // Query
        mutation: CREATE_TOPIC_MUTATION,
        refetchQueries: [
          {
            query: GET_FORUM_TOPICS_QUERY,
            variables: {
              query: this.searchTerm,
              first: this.page * 3,
              last: 3
            }
          }
        ],
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
      });
      this.toggleDialog();
    }
  },
  computed: {
    pages() {
      if (this.searchTerm && this.search)
        return Math.ceil(this.search.edgeCount / 3);
      else if (this.search) return Math.ceil(this.search.totalCount / 3);
      return 1;
    }
  }
};
</script>

<style scoped></style>
