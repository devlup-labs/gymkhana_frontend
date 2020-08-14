<template lang="pug">
  div(v-if="!$apollo.queries._societies.loading")
    v-parallax(
      :src="society.cover.sizes.find(e => e.name === 'full_size').url").society-photo.text-center
      v-overlay(absolute)
        p(class="white--text").display-2 {{ society.name }}
    v-container
      v-row.ma-4
        v-col(cols="12" md="8")
          v-card(flat tile text color="#fafafa" )
            v-card-title.headline About
            v-card-text.subtitle-1
              blockquote.blockquote.ma-2(class="black--text")
                p “Every child is an artist, the problem is staying an artist when you grow up.”
                p -   Pablo Picasso
            span(v-html="society.description")
            v-card-actions(v-if="society.reportLink")
              v-btn.elevation-4(class="accent" :href="society.reportLink" target="_blank") Annual Report
                v-icon(right) mdi-arrow-right
        v-col(cols="12" md="4")
          v-card(flat tile text color="#fafafa")
            v-card-title.headline.justify-center
              v-icon(left) mdi-pen
              | Upcoming Event
            v-card-text(v-if="society.upcomingEvents.edges.length")
              EventTable(:eventsList="society.upcomingEvents.edges")
            v-card-text(v-else).subtitle-1.text-center.ml-4 There are no upcoming events.
    v-row(class="grey lighten-3").pa-5
      v-col(cols="12" md="8" offset-md="2")
        v-card(class="accent white--text")
          v-card-title.display-1.justify-center Clubs
      v-container(v-if="society.clubSet.edges.length").md12
        v-row.pa-3.justify-space-around
          v-col(cols="12" md="4" v-for="({ node }, n) in society.clubSet.edges" :key="n")
            StripedCard(:node="node")
      v-container(v-else).md12.pa-5.title.text-center
            | There are currently no clubs in the society.
    v-row.pa-5.justify-center
      v-col(cols="12" sm="10" md="6" lg="4")
        v-card(flat tile text color="#fafafa" )
          v-card-title.headline.justify-center
            v-icon(left) mdi-newspaper
            | News
          v-card-text(v-if="society.pastNews.edges.length")
            NewsTable(:newsList="society.pastNews.edges")
          v-card-text(v-else).title.text-center
            | There is no news for the current Society.
    v-row(class="grey lighten-3" v-if="society.mentor || society.secretary || society.jointSecretary").pa-5
      v-col(cols="12" md="8" offset-md="2")
        v-card(class="accent white--text")
          v-card-title.display-1.justify-center Key People
      v-col(cols="12")
        v-container
          v-row.justify-space-around
            v-col(cols="12" md="4" v-if="society.jointSecretary")
              OfficeBearerCard(:avatarSize="120" :profile="society.jointSecretary" :designation="'Joint Secretary'")
            v-col(cols="12" md="4" v-if="society.secretary")
              OfficeBearerCard(:avatarSize="120" :profile="society.secretary" :designation="'Secretary'" )
            v-col(cols="12" md="4" v-if="society.mentor" )
              OfficeBearerCard(:avatarSize="120" :profile="society.mentor" :designation="'Mentor'")
</template>

<script>
import Footer from "../components/common/Footer";
import EventTable from "../components/common/tables/EventTable";
import OfficeBearerCard from "../components/OfficeBearerCard";
import NewsTable from "../components/common/tables/NewsTable";
import { GET_SOCIETY_DATA_QUERY } from "../graphql/queries/societyDataQuery";
import StripedCard from "../components/common/cards/StripedCard";

export default {
  apollo: {
    _societies: {
      query: GET_SOCIETY_DATA_QUERY,
      variables() {
        return {
          slugText: this.$route.params.slug
        };
      },
      update: data => data.societies
    }
  },
  name: "Society",
  components: { StripedCard, NewsTable, OfficeBearerCard, EventTable, Footer },
  computed: {
    society() {
      return this._societies.edges[0].node;
    }
  }
};
</script>

<style scoped>
.society-photo {
  margin-top: -48px;
  height: 30rem !important;
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
