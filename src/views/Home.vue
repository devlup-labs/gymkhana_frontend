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
      v-overlay(absolute)
        v-row.display-1.justify-center.ma-6(style="margin-top: -4rem !important") Festivals
        v-carousel(height="550px" :show-arrows="false" cycle hide-delimiter-background).text-center
          v-carousel-item(
            transition="fade-transition"
            reverse-transition="fade-transition"
            v-for="(fest, i) in festCarouselData" :key="i"
          )
            v-row.justify-center.align-center
              div.display-1 {{fest.title}}
              v-btn(icon ripple large :to="fest.to").ml-2
                v-icon mdi-link
            v-row.mt-5
              v-col(cols="12" md="6")
                  v-row.justify-center
                    v-img( :src="require('../assets/' + fest.image)" max-height="350" max-width="450")
              v-col(cols="12" md="6" align-self="center")
                v-row.font-weight-regular.justify-center.mt-2
                  v-col(cols="10")
                    p.subtitle-2.text-center.font-weight-bold  {{ fest.about }}
    v-container
      v-col(cols="12")
        p.display-1.text-center Societies
      v-col(cols="12" v-if="societies")
        v-row.justify-center
          v-col(v-for="({node}, i) in societies.edges" :key="i" md="6")
            v-row.justify-center
              v-hover( v-slot:default="{ hover }")
                v-card.mx-auto(
                  :to="node.slug"
                  :elevation="hover ? 15 : 2"
                  height="80%"
                  width="80%"
                )
                  v-img(:src="node.cover")
                    v-layout.align-end.fill-height
                      v-card-text(class="my-4 text-center title").stripe {{node.name}}
</template>

<script>
import { GET_SOCIETIES_QUERY } from "../graphql/queries/societyQuery";

export default {
  apollo: {
    societies: {
      query: GET_SOCIETIES_QUERY
    }
  },
  data: () => ({
    carouselHeight: null,
    festCarouselData: [
      {
        title: "Ignus",
        image: "img1.jpg",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos et id impedit modi odit placeat sunt tenetur! Eos illum neque provident? Accusantium autem cupiditate debitis doloremque doloribus possimus reprehenderit!  ",
        to: { name: "home" }
      },
      {
        title: "Varchas",
        image: "img2.jpg",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos et id impedit modi odit placeat sunt tenetur! Eos illum neque provident? Accusantium autem cupiditate debitis doloremque doloribus possimus reprehenderit!  ",
        to: { name: "home" }
      },
      {
        title: "Spandan",
        image: "img3.jpg",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos et id impedit modi odit placeat sunt tenetur! Eos illum neque provident? Accusantium autem cupiditate debitis doloremque doloribus possimus reprehenderit!  ",
        to: { name: "home" }
      },
      {
        title: "Framed",
        image: "img4.jpg",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos et id impedit modi odit placeat sunt tenetur! Eos illum neque provident? Accusantium autem cupiditate debitis doloremque doloribus possimus reprehenderit!  ",
        to: { name: "home" }
      }
    ],
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
      console.log("this.societies[0]");
      // console.log(this.societies[]);
      console.log("this.societies[0]");
    }
  },
  mounted() {
    this.onResize();
    this.log();
  }
};
</script>
