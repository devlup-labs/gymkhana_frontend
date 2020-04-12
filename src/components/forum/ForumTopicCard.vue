<template lang="pug">
  div
    v-card.elevation-2
      v-card-text
        v-row.justify-center.align-center
          v-avatar(:size="$vuetify.breakpoint.smAndDown?40:80")
            v-img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK")
          v-col(cols="10" sm="8").pl-6
            router-link(:to="{name : 'forum-topic',params : {id : `topic`}}" )
              v-row.mb-0
                span.subtitle-1 Has anyone installed Wine?
              v-row
                span.subtitle-2.text-capitalize Soham Sonawane
              v-row
                span.subtitle-2.text-capitalize.font-weight-light B.Tech, Computer Science, second year
              v-row.pa-1
                v-icon(small) mdi-reply
                span.subtitle-2 Anshul Ahuja
                span.subtitle-2.font-weight-light.pl-1  replied 3 mins ago
          v-col.pt-0.pb-0
            v-row.pt-0.pl-2
              v-col(cols="8" sm="6" ).pt-0
                UpvoteButton.justify-lg-center.pl-10
              v-col(cols="2" sm="3").pt-0.justify-center
                CommentsCounter
              v-col(cols="1"  v-if="true").pt-0.mr-6.pl-4
                TopicDeleteButton

</template>

<script>
import UpvoteButton from "../common/buttons/UpvoteButton";
import CommentsCounter from "../common/buttons/CommentsCounter";
import TopicDeleteButton from "../common/buttons/TopicDeleteButton";
export default {
  name: "ForumTopicCard",
  components: { TopicDeleteButton, CommentsCounter, UpvoteButton }
};
</script>

<style scoped>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 15px;
}
.v-card:not(.v-sheet--tile):not(.v-card--shaped):hover {
  background-color: #82b1ff;
  color: white;
}
.v-card:not(.v-sheet--tile):not(.v-card--shaped):hover span {
  color: white;
}
.v-application a {
  color: black;
  text-decoration: none;
}
</style>
