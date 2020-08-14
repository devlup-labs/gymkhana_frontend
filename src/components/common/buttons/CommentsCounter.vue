<template lang="pug">
  v-row.justify-center
    v-btn(icon  :to="{name:'forum-topic',params:{slug:slug}}")
      v-icon(left) mdi-message
      | {{answerCount}}
</template>

<script>
export default {
  name: "CommentsCounter",
  props: {
    answerCount: Number,
    slug: String
  }
};
</script>

<style scoped></style>
