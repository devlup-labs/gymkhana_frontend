<template lang="pug">
  v-flex(v-if="!$apollo.queries._clubs.loading")
    v-parallax(
      dark
      :src="club.cover.sizes.length ? club.cover.sizes.find(e => e.name === 'full_size').url : require('../assets/home5.jpg') "
      :height="$vuetify.theme.options.parallaxHeight * 1.3"
    ).topbar-style
      v-layout.justify-center.align-center.fill-height
        h1 {{ club.name }}
    v-container.pa-4
      v-row(:style="{'margin-top': `-${ $vuetify.theme.options.parallaxHeight / 3.5 }px`}").justify-center
        v-col(sm="10" md="8")
          v-card(
            :style="{'border-top': `8px solid ${ $vuetify.theme.themes.light.primary }`}"
          ).pa-5.elevation-8
            v-card-title.display-1.font-weight-light About
            v-card-text
              span(v-html="club.description")
            v-card-actions(v-if="club.resourcesLink").justify-end
              | Link to resources
              v-btn.ml-2(right ripple class="accent" :href="club.resourcesLink" target="_blank")
                v-icon mdi-arrow-right
    v-container
      v-layout(row)
        v-flex.md4
          v-card(flat tile text).background-color
            v-card-title.headline.justify-center
              v-icon(left large) mdi-lightbulb-outline
              | Upcoming Event
            v-card-text(v-if="club.eventSet.edges.length")
              EventTable(:eventsList="club.eventSet.edges")
            v-card-text(v-else).text-center.subtitle-1.ml-2 There are currently no events.
        v-flex.md7.offset-md1.elevation-0(flat tile depressed).pl-md-5.xs12
          v-card-title.headline.justify-center
            v-icon(left large) mdi-newspaper-plus
            | Activities and News
          v-tabs(fixed-tabs background-color='primary lighten-1' dark v-model="tab")
            v-tab
              | Activities
            v-tab
              v-icon(left) mdi-newspaper
              | news
          v-tabs-items(v-model="tab" )
            v-tab-item(v-if="club.activitySet.edges.length" )
              ActivityComponent(:activitiesList="club.activitySet.edges" )
            v-tab-item(v-else ).pa-8.text-center.title.background-color There are no activities.
            v-tab-item
              v-card(flat tile text ).pa-4.background-color
                v-card-text(v-if="club.newsSet.edges.length")
                  NewsTable(:newsList="club.newsSet.edges")
                v-card-text(v-else).pa-4.title.text-center
                  | There is no news currently
    v-container.pa-8
      v-flex.md10.offset-md1(v-if="club.captain || club.viceCaptainOne || club.viceCaptainTwo || club.viceCaptainThree || club.mentor")
        v-card(class="accent white--text").elevation-10
          v-card-title.justify-center.display-1 Key People
        v-row.justify-space-around
          v-flex(v-if="club.captain").md4.xs12
            CaptainComponent(:profile="club.captain" :designation="'Captain'")
          v-flex(v-if="club.viceCaptainOne").md4.xs12
            CaptainComponent(:profile="club.viceCaptainOne" :designation="'Vice Captain'")
          v-flex(v-if="club.viceCaptainTwo").md4.xs12
            CaptainComponent(:profile="club.viceCaptainTwo" :designation="'Vice Captain'")
          v-flex(v-if="club.viceCaptainThree").md4.xs12
            CaptainComponent(:profile="club.viceCaptainThree" :designation="'Vice Captain'")
          v-flex(v-if="club.mentor").md4.xs12
            CaptainComponent(:profile="club.mentor" :designation="'Mentor'")
    v-container.pa-5(v-if="club.customHtml")
      span(v-html="club.customHtml")
    v-container.pa-8(v-if="club.coreMembers.edges.length" fluid)
      v-flex.md8.offset-md2
        v-card(class="accent white--text").elevation-10
          v-card-title.justify-center.display-1 Volunteers
      v-row.justify-space-around
        v-col(cols="12" md="6" lg="4" v-for="({ node }, j) in club.coreMembers.edges" :key="j")
          CoreMemberComponent(:profile="node")
</template>

<script>
import EventTable from "../components/common/tables/EventTable";
import NewsTable from "../components/common/tables/NewsTable";
import Footer from "../components/common/Footer";
import { GET_CLUB_DATA_QUERY } from "../graphql/queries/clubDataQuery";
import ActivityComponent from "../components/common/ActivityComponent";
import CaptainComponent from "../components/common/cards/CaptainComponent";
import CoreMemberComponent from "../components/common/cards/CoreMemberComponent";

export default {
  apollo: {
    _clubs: {
      query: GET_CLUB_DATA_QUERY,
      variables() {
        return {
          slugText: this.$route.params.slug
        };
      },
      update: data => data.clubs
    }
  },
  name: "Club",
  components: {
    CoreMemberComponent,
    CaptainComponent,
    ActivityComponent,
    Footer,
    NewsTable,
    EventTable
  },
  data: () => ({
    tab: null
  }),
  computed: {
    club() {
      return this._clubs.edges[0].node;
    }
  }
};
</script>

<style scoped>
.topbar-style {
  margin-top: -48px;
}

.background-color {
  background-color: #fafafa;
}
</style>
