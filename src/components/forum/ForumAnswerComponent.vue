<template lang="pug">
  v-timeline-item
    template(v-slot:icon)
      v-avatar(size="60").elevation-2
        v-img(:src="authorAvatar?authorAvatar:require('@/assets/avatar_default.png')")
    v-card(class="elevation-2").pl-4
      v-card-title.subtitle-1.font-weight-light.pb-0 {{authorName}} {{answerTime}}
      v-row.align-start.pl-2
        v-col(cols="10")
          span(v-html="answerContent")
        v-col.align-center.pt-0
          v-row.mr-3.ml-5
            UpvoteButton(:upvoted="isUpvoted" :upvotes="upvotes" v-on:upVote="upVoteClick").pr-2
            TopicDeleteButton(v-if="isAuthor" v-on:delete_msg="deleteAnswerClicked")

</template>

<script>
import UpvoteButton from "../common/buttons/UpvoteButton";
import TopicDeleteButton from "../common/buttons/TopicDeleteButton";

export default {
  name: "ForumAnswerComponent",
  components: { TopicDeleteButton, UpvoteButton },
  props: {
    authorAvatar: { type: String, default: null },
    authorName: String,
    answerTime: String,
    answerContent: String,
    isUpvoted: Boolean,
    upvotes: Number,
    isAuthor: Boolean
  },
  methods: {
    upVoteClick() {
      this.$emit("upVote");
    },
    deleteAnswerClicked() {
      this.$emit("delete");
    }
  }
};
</script>

<style scoped>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 10px;
  border: #ee44aa 2px solid;
}
</style>
