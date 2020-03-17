<template lang="pug">
  v-flex
    v-parallax(
      dark
      :src="clubs.edges[0].node.cover.sizes.length ? clubs.edges[0].node.cover.sizes[0].url : require('../assets/home5.jpg') "
      :height="$vuetify.theme.options.parallaxHeight*1.3"
    )
      v-layout.justify-center.align-center.fill-height
        h1 {{clubs.edges[0].node.name}}
    v-container.pa-4
      v-row(:style="{'margin-top': `-${$vuetify.theme.options.parallaxHeight/3.5}px`}").justify-center
        v-col(sm="10" md="8")
          v-card(
            :style="{'border-top': `8px solid ${$vuetify.theme.themes.light.primary}`}"
          ).pa-5.elevation-8
            v-card-title.display-1.font-weight-light About
            v-card-text
              p {{clubs.edges[0].node.description.substring(3,clubs.edges[0].node.description.length-4)}}
            v-card-actions.justify-end
              |link to resources
              v-btn.ml-2(right ripple class="accent")
                v-icon mdi-arrow-right
    v-container
      v-layout(row)
        v-flex.md4
          v-card(flat tile text color="#fafafa" )
            v-card-title.headline.justify-center
              v-icon(left large) mdi-lightbulb-outline
              | Upcoming Event
            v-card-text
              EventTable(:eventTableData="clubs.edges[0].node.eventSet")
        v-flex.md7.offset-md1.elevation-0(flat tile depressed).pl-5.xs12
          v-tabs(fixed-tabs background-color='primary ' dark v-model="tab")
            v-tab
              | Activities
            v-tab
              v-icon(left) mdi-newspaper
              |news
          v-tabs-items(v-model="tab")
            v-tab-item
              ActivityComponent(:activitiesData="clubs.edges[0].node.activitySet")
            v-tab-item
              v-card(flat tile text).pa-4
                v-card-text(v-if="clubs.edges[0].node.newsSet.edges.length")
                  NewsTable(:newsData="clubs.edges[0].node.newsSet")
                v-card-text(v-else).pa-4.title.text-center
                 | There is now news currently

    v-container.pa-9.pb-0
      v-flex.md10.offset-md1
        v-card(class="accent white--text").elevation-10
          v-card-title.justify-center.display-1 Key People
        v-layout(row).justify-lg-space-around
          v-flex(v-if="clubs.edges[0].node.viceCaptainOne").md4.xs12
            CaptainComponent(:captainData="clubs.edges[0].node.viceCaptainOne")
          v-flex(v-if="clubs.edges[0].node.captain").md4.xs12
            CaptainComponent(:captainData="clubs.edges[0].node.captain")
          v-flex(v-if="clubs.edges[0].node.viceCaptainTwo").md4.xs12
            CaptainComponent(:captainData="clubs.edges[0].node.viceCaptainTwo")
      v-flex(v-if="!clubs.edges[0].node.viceCaptainOne&&!clubs.edges[0].node.viceCaptainTwo&&!clubs.edges[0].node.captain").text-center.subtitle-1.pt-8 There are no key people.
    v-container.pa-9.pb-0
      v-flex.md10.offset-md1
        v-card(class="accent white--text").elevation-10
          v-card-title.justify-center.display-1 Achievements
        v-container.pa-12.pb-5
          ol
            li Artwork of three of our members, Mohit Gupta, Kirti Vardhan Rathore and Himanshu Sahu was showcased at the Lorien Gallery, Denmark.
            li Karthik Mohan : Photographer of the Day for the theme "Art in your Heart" in the fest Pantheon – 2016 of College of engineering, Trivandrum, India.
            li Mohit Gupta : 3rd Prize Alcheringa, IIT Guwahati (2013).

    v-container.pa-12
      v-flex.md10.offset-md1
        v-card(class="accent white--text").elevation-10
          v-card-title.justify-center.display-1 Volunteers
        v-layout(row v-if="clubs.edges[0].node.coreMembers.edges.length").mt-10
          v-flex.md6(v-for="({node},j) in clubs.edges[0].node.coreMembers.edges" :key="j")
            CoreMemberComponent(:memberData="node")
        v-layout(row v-else).justify-center.mt-10
          p There are no core members of the following club.
</template>
<script>
import EventTable from "../components/common/EventTable";
import NewsTable from "../components/common/NewsTable";
import Footer from "../components/common/Footer";
import { GET_CLUB_DATA_QUERY } from "../graphql/queries/clubDataQuery";
import ActivityComponent from "../components/common/ActivityComponent";
import CaptainComponent from "../components/common/CaptainComponent";
import CoreMemberComponent from "../components/common/CoreMemberComponent";
export default {
  apollo: {
    clubs: {
      query: GET_CLUB_DATA_QUERY,
      variables() {
        return {
          slugText: this.$route.params.slug
        };
      }
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
  })
};
</script>

<style scoped></style>
