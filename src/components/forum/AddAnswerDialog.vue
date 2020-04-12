<template lang="pug">
  v-card
    v-card-title.pl-6.pt-6
      p Topic Name
      v-spacer
      slot(name="cross")
    v-divider
    v-card-subtitle
      p.pt-4 Answer
      v-textarea(label="Description" v-model="description" :counter="300" outlined).mt-2
    v-card-actions.mr-6.pb-6.justify-end
      slot(name="answer")
</template>

<script>
export default {
  name: "AddAnswerDialog",
  data: () => ({
    description: null
  })
};
</script>

<style scoped></style>
