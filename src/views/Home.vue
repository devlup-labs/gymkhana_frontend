<template lang="pug">
  div
    v-carousel(:height="carouselHeight" v-resize="onResize" elevate-on-scroll cycle hide-delimiter-background).topbar-margin
      v-carousel-item(
        v-for="({node}, i) in carouselGallery.edges[0].node.photos.edges"
        :key="i"
        :src="node.image.sizes[0].url"
        transition="fade-transition"
        reverse-transition="fade-transition"
      )
        v-layout.display-1.mask.justify-center.align-center.fill-height
            v-layout(column class="white--text" transition="fade-transition").text-center.font-weight-light.topbar-margin
              v-flex Students' Gymkhana
              v-flex IIT Jodhpur
    v-container.pa-10
      v-row
        v-col
          h1.mb-2.display-1.text-center About Students' Gymkhana
          v-row.justify-center
            v-col(sm="6" md="4")
              v-img(src="../assets/workstation-336369.jpg" )
            v-col(md="6" align-self="center")
              p.subtitle-1.text-center  Students' Gymkhana, IIT Jodhpur is the governing body that looks after all student activities.
      v-row.mt-4
        v-col
          v-row.justify-center
            v-col(sm="6" md="6")
              v-row.pa-2.justify-center.title.font-weight-regular
                v-icon(left) mdi-newspaper
                | News
              NewsTable(:newsData="this.societies.edges.flatMap(({node}) => node.clubSet.edges.flatMap(({node})=>node.newsSet.edges.map(e=>e)))")
            v-col(md="6" sm="6")
              v-row.pa-2.justify-center.title.font-weight-regular
                v-icon(left) mdi-note-text
                | Events
              EventTable(:eventTableData="this.societies.edges.flatMap(({node}) => node.clubSet.edges.flatMap(({node})=>node.eventSet.edges.map(e=>e)))")
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
            StripedCard(:nodeData="node")
</template>

<script>
import { GET_SOCIETIES_QUERY } from "../graphql/queries/homeSocietyQuery";
import { GET_FESTIVAL_QUERY } from "../graphql/queries/festivalQuery";
import FestivalCarousel from "../components/FestivalCarousel";
import StripedCard from "../components/common/StripedCard";
import { GET_CAROUSEL_IMAGES_QUERY } from "../graphql/queries/homeCarouselQuery";
import NewsTable from "../components/common/NewsTable";
import EventTable from "../components/common/EventTable";
import goTo from "vuetify/es5/services/goto";
//
export default {
  components: { EventTable, NewsTable, StripedCard, FestivalCarousel },
  apollo: {
    societies: {
      query: GET_SOCIETIES_QUERY
    },
    festivals: {
      query: GET_FESTIVAL_QUERY
    },
    carouselGallery: {
      query: GET_CAROUSEL_IMAGES_QUERY
    }
  },
  data: () => ({
    scrollingDown: true,
    scrollingUp: false,
    carouselHeight: null
  }),
  methods: {
    onResize() {
      this.carouselHeight = window.innerHeight;
      document
        .getElementsByTagName("header")[0]
        .setAttribute(
          "style",
          "background-color: rgba(255,255,255,0);width:100%;"
        );
      goTo(0, { duration: 50 });
    },
    log: function() {},
    handleScroll() {
      if (window.scrollY < 10) {
        this.scrollingUp = false;
      }
      if (window.scrollY > 15 && window.scrollY <= 60 && !this.scrollingUp) {
        goTo(982, { duration: 700 });
        this.scrollingDown = true;
      } else if (
        window.scrollY >= 890 &&
        window.scrollY <= 960 &&
        !this.scrollingDown
      ) {
        goTo(0);
        this.scrollingUp = true;
      }
      if (window.scrollY > 970) {
        this.scrollingDown = false;
      }
    }
  },
  mounted() {
    this.onResize();
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style>
/*  very important do not delete this class*/
.v-parallax__content {
  padding: 0 !important;
}

.topbar-margin {
  margin-top: -48px;
}

.mask {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
