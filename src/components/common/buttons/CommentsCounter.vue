<template lang="pug">
  v-row.justify-center
    v-btn(icon  )
      v-icon(left) mdi-message
      | {{answerCount}}
</template>

<script>
export default {
  name: "CommentsCounter",
  props: {
    answerCount: Number
  }
};
</script>

<style scoped></style>
