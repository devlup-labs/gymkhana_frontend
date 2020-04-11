<template lang="pug">
  div
    v-card.elevation-2
      v-card-text
        v-row
          v-avatar(size="80").ml-2
            v-img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK")
          v-col.pl-6
            router-link(:to="{name : 'forum-topic',params : {topic : 'topic'}}" )
              v-row.mb-0
                span.subtitle-1 Has anyone installed Wine?
                v-spacer
              v-row
                span.subtitle-2.text-capitalize Soham Sonawane
              v-row
                span.subtitle-2.text-capitalize.font-weight-light B.Tech, Computer Science, second year
              v-row.pa-1
                v-icon(small) mdi-reply
                span.subtitle-2 Anshul Ahuja
                span.subtitle-2.font-weight-light.pl-1  replied 3 mins ago
          v-btn(icon @click="upvote" :color="upvoted?'primary':'gray'").mr-4
            v-icon mdi-thumb-up



</template>

<script>
export default {
  name: "ForumTopicCard",
  data: () => ({
    upvoted: false
  }),
  methods: {
    upvote() {
      this.upvoted = !this.upvoted;
    }
  }
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
