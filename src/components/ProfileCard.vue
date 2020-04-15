<template lang="pug">
  v-card(:min-height="getCardHeight").elevation-4
    v-img( :src="coverLink" :height="getCardHeight/2")
    v-col.justify-center.text-center
      v-flex
        v-avatar.elevation-4.justify-center.ma-2(
          :size="getCardHeight/2"
          :style="{'margin-top': `-${getCardHeight/4}px !important`}")
          v-img.justify-center(:src="avatarLink")
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
    rollNumber: String,
    avatarLink: String,
    coverLink: String
  },
  computed: {
    getCardHeight() {
      return this.cardHeight || this.$vuetify.theme.options.profile.cardHeight;
    }
  }
};
</script>

<style scoped></style>
