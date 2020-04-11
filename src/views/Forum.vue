<template lang="pug">
  v-flex.fill-height
    v-container
      v-row.justify-center
        v-col(cols="12" ).justify-center
          v-col(lg="8" ).offset-lg-2
            v-row.align-center
              v-text-field(
                v-model="searchTerm"
                outline
                prepend-inner-icon="mdi-magnify"
                label="Search Forum for Topics"
                clearable)
              v-btn(color="primary" ).mb-2
                v-icon mdi-magnify
          v-divider.mb-5
          v-row.justify-center
            v-col(cols="12" md="10" xs="12" v-for="x in (1,3)")
              ForumTopic
    v-container.mt-5
        v-pagination(circle length="10" v-model="page" total-visible="7" next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left")
    v-tooltip(left color="black")
      template(v-slot:activator="{ on }")
        v-btn.mr-5.mb-12(
          color="primary"
          v-on="on"
          dark
          fixed
          bottom
          right
          fab).ma-5
          v-icon(large) mdi-plus
      span Add a topic


</template>

<script>
import ForumTopic from "../components/ForumTopic";

export default {
  name: "Forum",
  components: { ForumTopic },
  data: () => ({
    searchTerm: null,
    page: 1
  })
};
</script>

<style scoped></style>
