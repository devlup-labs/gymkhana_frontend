<template lang="pug">
  v-flex
    v-parallax(
      dark
      :src="require('../assets/home2.jpg')"
      :height="$vuetify.theme.options.parallaxHeight"
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
              p Currently club is having 3 entry-level and 2 semi-pro DSLRs namely :800D, 550D, 650D, 80D and 77D.
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
                v-card-text
                  NewsTable(:newsData="clubs.edges[0].node.newsSet")

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
        v-layout(row).mt-10
          v-flex.md6(v-for="({node},j) in clubs.edges[0].node.coreMembers.edges" :key="j")
            v-layout(row).justify-center.ma-2
              v-flex.md6
                v-card.elevation-6
                  v-img(:src="node.avatar" max-height="200")
              v-flex.md6
                v-layout(column).align-center.ma-4
                  v-flex.mt-4 {{node.user.firstName}}
                  v-flex.mt-4 {{node.phone}}
                  //v-flex.pa-4
                    v-layout(row)
                      v-btn(icon v-for="(sl,l) in volunteer.socialLinks" :key="l" :href="sl.link")
                        v-icon.pa-2 {{sl.icon}}
</template>
<script>
import EventTable from "../components/common/EventTable";
import NewsTable from "../components/common/NewsTable";
import Footer from "../components/common/Footer";
import { GET_CLUB_DATA_QUERY } from "../graphql/queries/clubDataQuery";
import ActivityComponent from "../components/common/ActivityComponent";
import CaptainComponent from "../components/common/CaptainComponent";
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
