<template lang="pug">
  v-card
    v-card-title.pl-6.pt-6
      p New Topic
      v-spacer
      slot(name="cross")
    v-divider
    v-card-subtitle
      p.pt-4 Category
      v-select(:items="categories" item-text="category" v-model="select")
      v-text-field(
        v-model="title"
        prepend-inner-icon="mdi-pencil"
        label="Title"
        clearable)
      v-col.pb-0
        p.mb-0.font-weight-light Tags
        v-chip.elevation-2.font-weight-bold.ma-1(
          xs2
          color="light-blue darken-1 white--text"
          v-for="(tag, i) in tags"
          :key="i"
          close
          @click:close="del(tag)"
        ) {{ tag }}
      v-text-field.mb-3.mt-0.pt-0(
        hint="Enter A Tag"
        persistent-hint
        @keyup.enter="e => add(e)"
      )
      v-textarea(label="Description" v-model="description" :counter="300" outlined).mt-2
    v-card-actions.mr-6.pb-6.justify-end
      slot(name="create")
</template>

<script>
export default {
  name: "AddTopicDialog",
  data: () => ({
    categories: [
      { key: "Q", category: "Question" },
      { key: "F", category: "Feedback" },
      { key: "S", category: "Suggestion" },
      { key: "I", category: "Improvement" }
    ],
    select: { key: "Q", category: "Question" },
    title: null,
    tags: [],
    description: null
  }),
  methods: {
    add: function(event) {
      this.tags.push(event.target.value);
      event.target.value = "";
    },
    del: function(tag) {
      this.tags = this.tags.filter(e => e !== tag);
    }
  }
};
</script>

<style scoped>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 10px;
}
</style>
