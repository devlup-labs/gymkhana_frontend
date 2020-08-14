<template lang="pug">
div
  v-container(fluid v-if="!$apollo.queries._topic.loading").pt-0
    v-row.text-capitalize.justify-center.align-center.fill-height(class="blue white--text").display-2.pa-8
      | {{topic.title}}
    v-container
      v-row.mt-3
        v-avatar(size="100")
          v-img(:src="topic.author.avatar.sizes.length?topic.author.avatar.sizes.find(e=>e.name==='full_size').url:require('@/assets/avatar_default.png')")
        v-col.pl-4
          v-row
            p {{topic.author.user.firstName.concat(' ',topic.author.user.lastName)}}
            p.ml-2.font-weight-light {{createdAt}}
            v-row.justify-end.mr-8.align-center
              UpvoteButton.justify-end.mr-4(:upvotes="topic.upvotesCount" :upvoted="topic.isUpvoted" v-on:upVote="upVoteClick(topic.id,true)" )
              v-btn(icon @click="toggleDialog")
                v-icon mdi-reply
              v-col(cols="1")
                TopicDeleteButton(v-if="topic.isAuthor" v-on:delete_msg="deleteMethod(topic.id,true)")
          span(v-if="topic.content" v-html="topic.content")
          v-row(v-if="topic.tags")
            v-chip.elevation-2.font-weight-bold.ma-1(
              xs2
              color="light-blue darken-1 white--text"
              v-for="(tag,i) in topic.tags.split(',')"
              :key="i"
            ) {{tag}}
      v-divider.mt-5
      v-timeline(align-top dense v-if="topic.answerSet.edges.length")
        ForumAnswerComponent(v-for="({node},t) in topic.answerSet.edges" :key="t"
          :authorAvatar="node.author.avatar.sizes.length?node.author.avatar.sizes.find(e=>e.name==='full_size').url:require('@/assets/avatar_default.png')"
          :authorName="node.author.user.firstName.concat(' ',node.author.user.lastName)"
          :answerTime="timeSince(node.createdAt)"
          :answerContent="node.content"
          :isUpvoted="node.isUpvoted"
          :upvotes="node.upvotesCount"
          :isAuthor="node.isAuthor"
          v-on:upVote="upVoteClick(node.id,false)"
          v-on:delete="deleteMethod(node.id,false)"
        )
      v-row(v-else).justify-center.display-1.font-weight-light.ma-6
        v-btn(icon @click="toggleDialog")
          v-icon mdi-reply
        |Be the first to answer
      v-dialog(v-model="dialog" persistent max-width="700px" )
        AddAnswerDialog(v-on:answer="addAnswer")
          template(v-slot:cross)
            v-btn(icon @click="toggleDialog")
              v-icon mdi-close
  v-row(style="height: 600px;" v-else).justify-center.align-center
    v-progress-circular(indeterminate color="primary" )
    span.ml-2 Loading...

</template>

<script>
import ForumAnswerComponent from "./ForumAnswerComponent";
import UpvoteButton from "../common/buttons/UpvoteButton";
import AddAnswerDialog from "./AddAnswerDialog";
import { GET_TOPIC_QUERY } from "../../graphql/queries/topicQuery";
import moment from "moment";
import { UPVOTE_MUTATION } from "../../graphql/mutations/upVoteMutation";
import TopicDeleteButton from "../common/buttons/TopicDeleteButton";
import { ADD_ANSWER_MUTATION } from "../../graphql/mutations/addAnswerMutation";
import { DELETE_MUTATION } from "../../graphql/mutations/deleteMutation";
export default {
  apollo: {
    _topic: {
      query: GET_TOPIC_QUERY,
      variables() {
        return {
          slug: this.$route.params.slug
        };
      },
      update: data => data.topic
    },
    $client: "private"
  },
  name: "ForumTopic",
  components: {
    TopicDeleteButton,
    AddAnswerDialog,
    UpvoteButton,
    ForumAnswerComponent
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
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
            query: GET_TOPIC_QUERY,
            variables: {
              slug: this.$route.params.slug
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
    addAnswer(content) {
      this.$apollo
        .mutate({
          // Query
          mutation: ADD_ANSWER_MUTATION,
          refetchQueries: [
            {
              query: GET_TOPIC_QUERY,
              variables: {
                slug: this.$route.params.slug
              }
            }
          ],
          // Parameters
          variables: {
            input: {
              topic: this.topic.id,
              content: content
            }
          },
          client: "private"
        })
        .then(() => {
          this.toggleDialog();
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
        .then(() => {
          if (is_topic) {
            this.$router.go(-1);
          } else {
            this.$apollo.queries._topic.refetch({
              slug: this.$route.params.slug
            });
          }
        });
    }
  },
  computed: {
    topic() {
      return this._topic.edges[0].node;
    },
    createdAt() {
      return moment(this.topic.createdAt).format("MMMM DD, YYYY, hh:mm a");
    }
  },
  mounted() {
    this.$apollo.queries._topic.refetch({
      slug: this.$route.params.slug
    });
  }
};
</script>

<style scoped></style>
