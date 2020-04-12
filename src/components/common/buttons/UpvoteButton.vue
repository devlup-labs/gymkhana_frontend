<template lang="pug">
  v-row.align-center
    v-btn(icon  @click="upvote" :color="upvoted?'primary':'gray'")
      v-icon mdi-thumb-up
    span {{upvotes}}
  
</template>

<script>
export default {
  name: "UpvoteButton",
  data: () => ({
    upvoted: false,
    upvotes: 0
  }),
  methods: {
    upvote() {
      this.upvoted = !this.upvoted;
      this.upvotes = this.upvoted ? this.upvotes + 1 : this.upvotes - 1;
    }
  }
};
</script>

<style scoped></style>
