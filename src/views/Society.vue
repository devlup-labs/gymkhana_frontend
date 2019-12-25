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
    Footer
</template>

<script>
import Footer from "../components/common/Footer";
import EventTable from "../components/common/EventTable";
export default {
  name: "Society",
  components: { EventTable, Footer }
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
</style>
