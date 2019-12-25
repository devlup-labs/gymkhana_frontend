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
</style>
