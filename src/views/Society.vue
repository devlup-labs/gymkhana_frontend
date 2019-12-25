<template lang="pug">
  v-content.pt-0
    v-parallax(src="../assets/home1.jpg" cover).society-photo.text-center.align-center
      v-overlay(absolute)
        p(class="white--text").display-2 Society of Design and Arts
    v-container
      v-layout(row).ma-4
        v-flex.md8
          v-card(flat tile text)
            v-card-title.headline About
            v-card-text.subtitle-1
              blockquote.blockquote.ma-2(class="black--text")
                p “Every child is an artist, the problem is staying an artist when you grow up.”
                p -   Pablo Picasso
              p We, the engineers, are supposed to be innovative in order to provide solutions to the problems challenging every system and we believe that creativity is a very important ingredient in the recipe for innovation. Anybody can plan weird; that is easy. What’s hard is to be simple. Making the simple, awesomely simple this is creativity.
              p So we, at Student Design and Arts Society, aim at discovering and polishing the creative abilities of the students and help them realize their interests and talents. Moreover, we help students in realizing them their artistic talents for we believe that we are surrounded by art and it is an inevitable component in accomplishing any task. The society has its independent activities, workshops, and competitions under the following areas of interest mentioned under clubs:
            v-card-actions
              v-btn.elevation-4(class="accent") Annual Report
                v-icon(right) mdi-arrow-right
        v-flex.md4
          v-card(flat tile text)
            v-card-title.headline.justify-center
              v-icon(left) mdi-pen
              | Upcoming Event
            v-card-text
              EventTable
    v-layout(row class="grey lighten-3").pa-5
      v-flex.md8.offset-md2
        v-card(class="accent white--text")
          v-card-title.display-1.justify-center Clubs
      v-container.md12
        v-layout(row).pa-3
          v-flex(v-for="(club,n) in clubs" :key="n").md4.xs12.sm12
            v-layout(row ).justify-center.mt-10
              v-hover( v-slot:default="{ hover }")
                v-card(
                  :to="club.to"
                  :elevation="hover ? 15 : 2"
                  class="mx-auto"
                  height="80%"
                  width="80%"
                )
                  v-img(:src="club.img")
                    v-layout.align-end.fill-height
                      v-card-text(class="my-4 text-center title").stripe.subtitle-1.font-weight-medium {{club.name}}
    v-layout(row ).pa-5.justify-center
      v-card(flat tile text)
        v-card-title.headline.justify-center
          v-icon(left) mdi-newspaper
          | News
        v-card-text
          | No Upcoming News
    v-layout(row class="grey lighten-3").pa-5
      v-flex.md8.offset-md2
        v-card(class="accent white--text")
          v-card-title.display-1.justify-center Key People
      v-flex.md12
        v-container
          v-row
            v-col(cols="12" md="4" v-for="x in 3" :key="x")
              OfficeBearerCard(:avatarSize="120")
    Footer
</template>

<script>
import Footer from "../components/common/Footer";
import EventTable from "../components/common/EventTable";
import OfficeBearerCard from "../components/OfficeBearerCard";
export default {
  name: "Society",
  components: { OfficeBearerCard, EventTable, Footer },
  data: () => ({
    clubs: [
      {
        name: "Photography Club",
        to: { name: "society" },
        img: require("../assets/img1.jpg")
      },
      {
        name: "Designerds",
        to: { name: "society" },
        img: require("../assets/img2.jpg")
      },
      {
        name: "FremeX",
        to: { name: "society" },
        img: require("../assets/img3.jpg")
      }
    ]
  })
};
</script>

<style scoped>
.society-photo {
  height: 20rem !important;
  background: url("../assets/home1.jpg") no-repeat center !important;
  background-size: cover !important;
  -webkit-background-size: cover !important;
}
blockquote {
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  border-left: 0.4rem solid #4791db;
}
.stripe {
  background-color: rgba(255, 255, 255, 0.74);
}
</style>
