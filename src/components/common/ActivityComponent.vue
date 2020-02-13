<template lang="pug">
  v-expansion-panels(accordion focusable)
    v-expansion-panel(v-for='({node},i) in activitiesData.edges' :key='i')
      v-expansion-panel-header {{node.name}}
      v-expansion-panel-content.mt-2
        | {{node.description.substring(3,node.description.length-4)}}
</template>

<script>
export default {
  name: "ActivityComponent",
  props: {
    activitiesData: {}
  }
};
</script>

<style scoped></style>
