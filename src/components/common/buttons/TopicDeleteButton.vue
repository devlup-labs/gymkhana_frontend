<template lang="pug">
  v-row.justify-center
    v-btn(icon @click="deleteMethod")
      v-icon mdi-trash-can
</template>

<script>
export default {
  name: "TopicDeleteButton",
  methods: {
    deleteMethod() {
      this.$emit("delete_msg");
    }
  }
};
</script>

<style scoped></style>
