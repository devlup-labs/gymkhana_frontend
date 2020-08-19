<template lang="pug">
  v-row
    v-col(v-for="({node}, j) in images" :key="j" cols="12"  sm="8" md="4").offset-md-0.offset-sm-2
      v-tooltip(bottom)
        template(v-slot:activator="{ on }")
          v-hover(v-slot:default="{ hover }")
            v-card.mx-auto(
              :elevation="hover ? 24 : 0"
              @click.stop="show(j)"
            )
              v-img(
                :src="node.image.sizes.find(e => e.name === 'full_size').url"
                height="250px"
                v-on="on"
              )
        span {{ node.title }}
    v-overlay(:value="dialog" opacity=".95")
      v-container
        v-row.justify-end
          v-btn(@click.stop="hide()" icon)
            v-icon mdi-close
        v-container
          v-carousel(
            :height="carouselHeight"
            hide-delimiters
            show-arrows
            v-model="lgIndex"
          )
            v-carousel-item(
              transition="fade-transition"
              reverse-transition="fade-transition"
              v-for="({ node }, i) in images"
              :key="i"
            )
              v-row.justify-center.fill-height.align-center
                v-col(cols="10")
                  v-row.justify-center.mb-1
                    span.font-weight-light.headline.pa-2 {{ node.title }}
                  v-row
                    v-img(:src="node.image.sizes.find(e => e.name === 'full_size').url")
</template>

<script>
export default {
  name: "CustomLightGallery",
  props: {
    images: { Type: Array, required: true }
  },
  data: () => ({
    dialog: false,
    lgIndex: 0
  }),
  methods: {
    show(index) {
      this.lgIndex = index;
      this.dialog = !this.dialog;
    },
    hide() {
      this.dialog = !this.dialog;
    }
  },
  computed: {
    carouselHeight() {
      return window.innerHeight / 1.3;
    }
  }
};
</script>

<style scoped>
@media (max-width: 960px) {
  .container {
    max-width: 750px;
  }
}

@media (max-width: 750px) {
  .container {
    max-width: 550px;
  }
}

@media (max-width: 550px) {
  .container {
    max-width: 400px;
  }
}
</style>
