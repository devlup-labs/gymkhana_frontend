<template lang="pug">
  v-timeline-item
    template(v-slot:icon)
      v-avatar(size="60").elevation-2
        v-img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK")
    span(slot="opposite") Soham
    v-card(class="elevation-2").pl-4
      v-card-title.subtitle-1.font-weight-light.pb-0 About 6 mins ago
      v-row.align-start
        v-col(cols="10")
          p Lorem ipsum dolorn vim zril disputando voluptatibus, vix an salutandi sententiae. lorem ipsumim zril disputando voluptatibus, vix an salutandi sententiae. lorem ipsumim zril disputando voluptatibus, vix an salutandi sententiae. lorem ipsum
        v-col.align-center.pt-0
          v-row.mr-3.ml-5
            UpvoteButton.pr-2
            TopicDeleteButton

</template>

<script>
import UpvoteButton from "../common/buttons/UpvoteButton";
import TopicDeleteButton from "../common/buttons/TopicDeleteButton";
export default {
  name: "ForumAnswerComponent",
  components: { TopicDeleteButton, UpvoteButton }
};
</script>

<style scoped>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 10px;
  border: #ee44aa 2px solid;
}
</style>
