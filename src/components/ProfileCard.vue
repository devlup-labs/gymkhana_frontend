<template lang="pug">
  v-card(:min-height="getCardHeight").elevation-4
    v-img(src="https://students.iitj.ac.in/static/assets/others/cover2.svg" :height="getCardHeight/2")
    v-col.justify-center.text-center
      v-flex
        v-avatar.elevation-4.justify-center.ma-2(
          :size="getCardHeight/2"
          :style="{'margin-top': `-${getCardHeight/4}px !important`}")
          v-img.justify-center(src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png")
      v-flex
        h2(class="black--text").font-weight-bold.mt-0 {{ name }}
      v-flex
        p.font-weight-regular.mb-1 {{ rollNumber }}
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    cardHeight: Number,
    name: String,
    rollNumber: String
  },
  computed: {
    getCardHeight() {
      return this.cardHeight || this.$vuetify.theme.options.profile.cardHeight;
    }
  }
};
</script>

<style scoped></style>
