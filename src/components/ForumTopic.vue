<template lang="pug">
  v-container(fluid).pt-0
    v-row.text-capitalize.justify-center.align-center.fill-height(class="blue white--text").display-2.pa-8
      |Topic
    v-container
      v-row.mt-3
        v-avatar(size="100")
          v-img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK")
        v-col.pl-4
          v-row
            p Soham Sonawane
            p.ml-2.font-weight-light April 8, 2020, 2:23 a.m.
            v-row.justify-end.mr-8.align-center
              v-btn(icon)
                v-icon mdi-thumb-up
              v-btn(icon )
                v-icon mdi-reply
          span Description
          v-row
            v-chip.elevation-2.font-weight-bold.ma-1(
              xs2
            color="light-blue darken-1 white--text"
            v-for="i in 3"
            :key="i"
          ) tags

      v-divider.mt-5
      v-timeline(align-top :dense="$vuetify.breakpoint.smAndDown ? true :false")
        v-timeline-item(v-for="v in 4" key="v")
          template(v-slot:icon)
            v-avatar(size="60").elevation-2
              v-img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK")
          span(slot="opposite") Soham
          v-card(class="elevation-2").pl-4
            v-card-title.subtitle-1.font-weight-light.pb-0 About 6 mins ago
            v-row.align-start
              v-col(cols="11")
                p Lorem ipsum dolorn vim zril disputando voluptatibus, vix an salutandi sententiae. lorem ipsumim zril disputando voluptatibus, vix an salutandi sententiae. lorem ipsumim zril disputando voluptatibus, vix an salutandi sententiae. lorem ipsum
              v-col
                v-btn(icon)
                  v-icon mdi-thumb-up
                v-btn(icon)
                  v-icon mdi-trash-can



  
</template>

<script>
export default {
  name: "ForumTopic"
};
</script>

<style scoped></style>
