<template lang="pug">
  v-flex
    v-parallax(
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      :height="350"
        )
      v-layout.justify-center.align-center.fill-height
        h1 About Me
    v-container
      v-layout(row :style="{'margin-top': `-100px`}")
        v-flex.md10.offset-md1
          v-card(:height="300").elevation-4
            v-img(src="https://students.iitj.ac.in/static/assets/others/cover2.svg" :height="150")
      v-layout.pt-4(row)
        v-flex.md5.offset-md1
          v-card.elevation-4
            h1 col
        v-flex.md5.offset-md-1.pl-2
          v-card.elevation-4
            h1 col
    //v-layout.justify-center(:style="{'margin-top': `-100px`}")
      v-row
        v-col
          v-card(:height="300" :width="900")
            v-img(src="https://students.iitj.ac.in/static/assets/others/cover2.svg" :height="150")
      v-row
        v-col
          v-card.elevation-3(:height="300")
            p b
        v-col
          v-card(:height="300")
              p a

    v-btn.mb-5(
      color="primary"
      dark
      absolute
      bottom
      right
      fab)
      v-icon mdi-pencil


</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped />
