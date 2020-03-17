<template lang="pug">
  v-carousel( v-if="festivals" cycle hide-delimiter-background show-arrows-on-hover).text-center
    v-carousel-item(
      transition="fade-transition"
      reverse-transition="fade-transition"
      v-for="({node}, i) in festivals.edges" :key="i"
    )
      v-row.justify-center
        div.display-1 {{node.name.toUpperCase()}}
        v-btn(icon ripple large :to="node.slug" right)
          v-icon mdi-link
      v-row.mt-6
        v-col
          v-row.justify-center
            v-img( :src="node.photo.sizes[0].url" max-height="350" max-width="450")
        v-col
          v-row.font-weight-regular.mt-2.justify-lg-start.justify-center
            v-col(cols="10")
              p.subtitle-2.text-center.font-weight-bold  {{node.about.substring(3,node.about.length-4)}}
</template>

<script>
export default {
  name: "FestivalCarousel",
  props: {
    festivals: null
  }
};
</script>

<style scoped></style>
