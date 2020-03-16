<template lang="pug">
  div
    v-carousel(:height="carouselHeight" v-resize="onResize" cycle hide-delimiter-background)
      v-carousel-item(
        v-for="(carouselItem, i) in homeCarousel"
        :key="i"
        :src="carouselItem.image"
        transition="fade-transition"
        reverse-transition="fade-transition"
      )
    v-row
      v-col
        h1.mb-2.display-1.text-center About Students' Gymkhana
        v-row.justify-center
          v-col(sm="6" md="4")
            v-img(src="../assets/workstation-336369.jpg" )
          v-col(md="6" align-self="center")
            p.subtitle-1.text-center  Students' Gymkhana, IIT Jodhpur is the governing body that looks after all student activities.
    v-parallax(src="../assets/hero.jpeg" :height="carouselHeight")
      v-content.align-center.mask
        v-container.container--fluid.mb-12
            v-row.display-1.justify-center.mb-12 Festivals
            v-row
              FestivalCarousel(:festivals="festivals")
    v-container
      v-col(cols="12")
        p.display-1.text-center Societies
      v-col(cols="12" v-if="societies")
        v-row.justify-center
          v-col(v-for="({node}, i) in societies.edges" :key="i" md="6")
            v-row.justify-center
              v-hover( v-slot:default="{ hover }")
                v-card.mx-auto(
                  :to="{name: 'society', params: {slug: node.slug}}"
                  :elevation="hover ? 15 : 2"
                  height="70%"
                  width="80%"
                )
                  v-img(:src="node.cover.sizes[2].url")
                    v-layout.align-end.fill-height
                      v-card-text.my-6.title.text-center.stripe {{node.name}}
</template>

<script>
import { GET_SOCIETIES_QUERY } from "../graphql/queries/societyQuery";
import { GET_FESTIVAL_QUERY } from "../graphql/queries/festivalQuery";
import FestivalCarousel from "../components/FestivalCarousel";

export default {
  components: { FestivalCarousel },
  apollo: {
    societies: {
      query: GET_SOCIETIES_QUERY
    },
    festivals: {
      query: GET_FESTIVAL_QUERY
    }
  },
  data: () => ({
    carouselHeight: null,
    homeCarousel: [
      { image: require("../assets/home1.jpg") },
      { image: require("../assets/home2.jpg") },
      { image: require("../assets/home3.jpg") },
      { image: require("../assets/home4.jpg") },
      { image: require("../assets/home5.jpg") }
    ]
  }),
  methods: {
    onResize() {
      // 48px is the header size
      this.carouselHeight = window.innerHeight - 48;
    },
    log() {
      //console.log("this.societies[0]");
      // console.log(this.societies[]);
      //console.log("this.societies[0]");
    }
  },
  mounted() {
    this.onResize();
    this.log();
  }
};
</script>
<style>
/*  very important do not delete this class*/
.v-parallax__content {
  padding: 0 !important;
}
.stripe {
  background: rgba(255, 255, 255, 0.7);
}
.mask {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
