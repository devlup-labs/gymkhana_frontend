<template lang="pug">
  v-expansion-panels(accordion focusable)
    v-expansion-panel(v-for='({ node }, i) in activitiesList' :key='i')
      v-expansion-panel-header {{ node.name }}
      v-expansion-panel-content.mt-2
        span(v-html="node.description")
</template>

<script>
export default {
  name: "ActivityComponent",
  props: {
    activitiesList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
