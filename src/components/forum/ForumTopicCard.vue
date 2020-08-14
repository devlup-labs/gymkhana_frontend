<template lang="pug">
  v-hover(v-slot:default="{ hover }")
    v-card(:elevation="hover ? 10 : 2")
      v-card-text
        v-row.justify-center.align-start
          v-avatar(:size="$vuetify.breakpoint.smAndDown?40:80").ml-2.mt-2
            v-img(:src="authorPic?authorPic:require('@/assets/avatar_default.png')")
          v-col(cols="10" sm="6" lg="8").pl-6
            router-link(:to="{name : 'forum-topic',params : {slug : slug}}" )
              v-row.mb-0
                span.subtitle-1 {{topic}}
              v-row
                span.subtitle-2.text-capitalize {{authorName}}
              v-row
                span.subtitle-2.text-capitalize.font-weight-light {{authorInfo}}
              v-row.pa-1(v-if="answerAuthorName")
                v-icon(small) mdi-reply
                span.subtitle-2 {{answerAuthorName}}
                span.subtitle-2.font-weight-light.pl-1  replied {{answerTime}}
              v-row(v-else)
                v-icon(small) mdi-reply
                span Be the first to answer
          v-col.pt-0.pb-0
            v-row.pt-0.pl-2
              v-col(cols="8" sm="6" ).pt-0
                slot(name="upVote")
              v-col(cols="2" sm="3").pt-0.justify-center
                slot(name="answersCount")
              v-col(cols="1"  v-if="true").pt-0.mr-6.pl-4
                slot(name="deleteButton")

</template>

<script>
export default {
  name: "ForumTopicCard",
  props: {
    topic: String,
    slug: String,
    authorPic: String,
    authorName: String,
    authorInfo: String,
    answerAuthorName: String,
    answerTime: String
  }
};
</script>

<style scoped>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 15px;
}
.v-application a {
  color: black;
  text-decoration: none;
}
</style>
