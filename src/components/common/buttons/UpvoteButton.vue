<template lang="pug">
  v-row.align-center
    v-btn(icon  @click="$emit('upVote');" :color="upvoted?'primary':'gray'")
      v-icon mdi-thumb-up
    span {{upvotes}}
  
</template>

<script>
export default {
  name: "UpvoteButton",
  props: {
    upvoted: Boolean,
    upvotes: Number
  }
};
</script>

<style scoped></style>
