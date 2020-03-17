<template lang="pug">
  div
    v-parallax(:src="societies.edges[0].node.cover.sizes[0].url").society-photo.text-center
      v-overlay(absolute)
        p(class="white--text").display-2 {{societies.edges[0].node.name}}
    v-container
      v-layout(row).ma-4
        v-flex.md8
          v-card(flat tile text color="#fafafa" )
            v-card-title.headline About
            v-card-text.subtitle-1
              blockquote.blockquote.ma-2(class="black--text")
                p “Every child is an artist, the problem is staying an artist when you grow up.”
                p -   Pablo Picasso
              p {{societies.edges[0].node.description.substring(3,societies.edges[0].node.description.length -4)}}
            v-card-actions
              v-btn.elevation-4(class="accent") Annual Report
                v-icon(right) mdi-arrow-right
        v-flex.md4
          v-card(flat tile text color="#fafafa")
            v-card-title.headline.justify-center
              v-icon(left) mdi-pen
              | Upcoming Event
            v-card-text(v-if="checkEvents()")
              EventTable(:societyEventData="societies.edges[0].node.clubSet")
            v-card-text(v-else).subtitle-1.text-center.ml-4 There are currently no events.
    v-layout(row class="grey lighten-3").pa-5.pr-0
      v-flex.md8.offset-md2
        v-card(class="accent white--text")
          v-card-title.display-1.justify-center Clubs
      v-container(v-if="societies.edges[0].node.clubSet.edges.length").md12
        v-layout(row).pa-3.justify-space-around
          v-flex(v-for="({node},n) in societies.edges[0].node.clubSet.edges" :key="n").md4.xs12.sm12
            StripedCard(:nodeData="node")
      v-container(v-else).md12.pa-5.title.text-center
            | There are currently no clubs in the society.
    v-layout(row ).pa-5.justify-center
      v-card(flat tile text color="#fafafa" )
        v-card-title.headline.justify-center
          v-icon(left) mdi-newspaper
          | News
        v-card-text(v-if="checkNews()")
          NewsTable( :societyNewsData="societies.edges[0].node.clubSet")
        v-card-text(v-else).title
          | There is no news for the current Society.
    v-layout(row class="grey lighten-3").pa-5
      v-flex.md8.offset-md2
        v-card(class="accent white--text")
          v-card-title.display-1.justify-center Key People
      v-flex.md12.xs12
        v-container
          v-row.justify-space-around
            v-col(cols="12" md="4" v-if="societies.edges[0].node.jointSecretary")
              OfficeBearerCard(:avatarSize="120" :bearerData="societies.edges[0].node.jointSecretary" )
            v-col(cols="12" md="4" v-if="societies.edges[0].node.secretary")
              OfficeBearerCard(:avatarSize="120" :bearerData="societies.edges[0].node.secretary" )
            v-col(cols="12" md="4" v-if="societies.edges[0].node.mentor" )
              OfficeBearerCard(:avatarSize="120" :bearerData="societies.edges[0].node.mentor" )
      v-flex(v-if="!societies.edges[0].node.mentor&&!societies.edges[0].node.secretary&&!societies.edges[0].node.jointSecretary").title.text-center.md12.xs12
        | There are no key people.
</template>

<script>
import Footer from "../components/common/Footer";
import EventTable from "../components/common/EventTable";
import OfficeBearerCard from "../components/OfficeBearerCard";
import NewsTable from "../components/common/NewsTable";
import { GET_SOCIETY_DATA_QUERY } from "../graphql/queries/societyDataQuery";
import StripedCard from "../components/common/StripedCard";
export default {
  apollo: {
    societies: {
      query: GET_SOCIETY_DATA_QUERY,
      variables() {
        return {
          slugText: this.$route.params.slug
        };
      }
    }
  },
  name: "Society",
  components: { StripedCard, NewsTable, OfficeBearerCard, EventTable, Footer },
  methods: {
    onResize() {
      // 48px is the header size
      this.carouselHeight = window.innerHeight - 48;
    },
    checkNews() {
      for (let i = 0; i < this.societies.edges.length; i++) {
        if (this.societies.edges[i].node.clubSet.edges.length === 0) return 0;
        for (
          let j = 0;
          j < this.societies.edges[i].node.clubSet.edges.length;
          j++
        ) {
          if (
            this.societies.edges[i].node.clubSet.edges[j].node.newsSet.edges
              .length >= 1
          )
            return 1;
        }
      }
    },
    checkEvents() {
      for (let i = 0; i < this.societies.edges.length; i++) {
        if (!this.societies.edges[i].node.clubSet.edges.length) return 0;
        for (
          let j = 0;
          j < this.societies.edges[i].node.clubSet.edges.length;
          j++
        ) {
          if (
            this.societies.edges[i].node.clubSet.edges[j].node.eventSet.edges
              .length >= 1
          )
            return 1;
        }
      }
    }
  },
  mounted() {
    this.onResize();
  }
};
</script>

<style scoped>
.society-photo {
  height: 28rem !important;
  background-size: cover !important;
  -webkit-background-size: cover !important;
}
.v-application .blockquote {
  border-left: 0.3rem solid #4791db;
}
.stripe {
  background-color: rgba(255, 255, 255, 0.74);
}
</style>
