<template lang="pug">
  v-row.align-center
    v-btn(icon  @click="emitUpvote" :color="upvoted?'primary':'gray'")
      v-icon mdi-thumb-up
    span {{upvotes}}
  
</template>

<script>
export default {
  name: "UpvoteButton",
  props: {
    upvoted: Boolean,
    upvotes: Number
  },
  methods: {
    emitUpvote() {
      this.$emit("upVote");
      this.upvoted = !this.upvoted;
      this.upvotes = this.upvoted ? this.upvotes + 1 : this.upvotes - 1;
    }
  }
};
</script>

<style scoped></style>
