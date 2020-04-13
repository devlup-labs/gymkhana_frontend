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
                clearable)
              v-btn(color="primary" ).mb-2
                v-icon mdi-magnify
          v-divider.mb-5
          v-row.justify-center(v-if="search")
            v-col(cols="12" md="10" xs="12" v-for="({node},x) in this.search.edges" :key="x")
              ForumTopicCard(:topic="node.title" :slug="node.slug" :authorName="authorName(node)" :authorInfo="authorInfo(node)" :answerAuthorName="answerAuthorName(node)"
                :answerTime="node.answersCount  ?timeSince(node.answerSet.edges[0].node.createdAt):null"
                :authorPic="node.author.avatar.sizes.find(e=>e.name=='full_size').url")
                template(v-slot:upVote)
                  UpvoteButton.justify-lg-center.pl-10(:upvotes="node.upvotesCount" :upvoted="node.isUpvoted").justify-sm-end
                template(v-slot:answersCount)
                  CommentsCounter(:answerCount="node.answersCount")
                template(v-slot:deleteButton)
                  TopicDeleteButton(v-if="node.isAuthor")
    v-container.mt-5
        v-pagination(circle :length="pages" v-model="page" total-visible="7" next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left")
    v-dialog(v-model="dialog" persistent max-width="700px" )
      AddTopicDialog
        template(v-slot:cross)
          v-btn(icon @click="toggleDialog")
            v-icon mdi-close
        template(v-slot:create)
          v-btn(@click="toggleDialog" color="primary") Create
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

export default {
  apollo: {
    search: {
      query: GET_FORUM_TOPICS_QUERY,
      variables() {
        if (this.searchTerm) {
          return {
            query: this.searchTerm,
            first: this.page * 3,
            last: 3
          };
        } else {
          return {
            query: "",
            first: this.page * 3,
            last: 3
          };
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
    searchTerm: null,
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
