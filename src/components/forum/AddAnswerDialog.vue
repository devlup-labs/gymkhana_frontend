<template lang="pug">
  v-card
    v-card-title.pl-6.pt-6
      p Topic Name
      v-spacer
      slot(name="cross")
    v-divider
    v-card-subtitle
      p.pt-4 Answer
      v-form(ref="form" v-model="valid")
        v-textarea(label="Description" v-model="description" :counter="300" outlined :rules="[v=>!!v || 'Required']" ).mt-2
    v-card-actions.mr-6.pb-6.justify-end
      v-btn(@click="answer" color="primary" :disabled="!valid" ) Answer
</template>

<script>
export default {
  name: "AddAnswerDialog",
  data: () => ({
    description: null,
    valid: false
  }),
  methods: {
    answer() {
      this.$emit("answer", this.description);
    }
  }
};
</script>

<style scoped></style>
