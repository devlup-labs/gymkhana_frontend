<template lang="pug">
  v-carousel(
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    height="auto" ).text-center
    v-carousel-item(
      height="auto"
      transition="fade-transition"
      reverse-transition="fade-transition"
      v-for="({ node }, i) in festivalsList" :key="i"
    )
      v-row.justify-center
        div.display-1 {{ node.name.toUpperCase() }}
        v-btn(icon ripple large :to="node.slug" right)
          v-icon mdi-link
      v-row.mt-6
        v-col
          v-row.justify-center
            v-img(
              :src="node.photo.sizes.find(e => e.name === 'full_size').url"
              max-height="350"
              max-width="450"
            )
        v-col
          v-row.font-weight-regular.mt-2.justify-lg-start.justify-center
            v-col(cols="10")
              p.subtitle-2.text-center.font-weight-bold(v-html="node.about")
</template>

<script>
export default {
  name: "FestivalCarousel",
  props: {
    festivalsList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
