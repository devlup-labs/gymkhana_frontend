<template lang="pug">
  div
    section
      v-card.elevation-0(color="blue darken-1 white--text" flat tile)
        v-layout(row wrap align-center style="{background: #000000}").justify-center
          v-flex.md6
            v-layout(row).ml-12
              v-container
                span ABOUT US
                p Student Gymkhana IITJ
                br
                span Coming Soon!
          v-flex.md6.justify-end
            v-layout(row).text-end.mr-12
              v-container
                p QUICK LINKS
                p  IIT Jodhpur
                p Contact Us
                p Acadmic Calender

    v-footer(color="blue darken-2 white--text").text-center.justify-center.align-center
      v-icon(color="white" size="20") mdi-copyright
      h4.font-weight-regular 2019 COPYRIGHT: made with
      v-icon(color="red").pa-1 mdi-heart
      h4.font-weight-regular by Students' Gymkhana WebD Team



</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped></style>
