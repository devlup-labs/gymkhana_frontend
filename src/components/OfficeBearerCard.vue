<template lang="pug">
  v-stepper(v-model="cardPage").pa-0
    v-stepper-items
      v-stepper-content.pa-0(step="1")
        v-card(:height="avatarSize*3")
          v-img(src="https://students.iitj.ac.in/static/assets/others/cover2.svg" :height="avatarSize")
          v-card-text.pt-0.text-center
            v-avatar.elevation-4.ma-2(:size="avatarSize" :style="{'margin-top': `-${avatarSize/2}px !important`}")
              v-img(src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png")
            h2(class="black--text").font-weight-bold.mt-5 Anugrah Shukla
            p.font-weight-regular.mt-2 General Secretary
          v-card-actions
            v-row(justify="center")
              v-btn(@click="cardPage = 2" text)
                v-icon mdi-refresh
                v-text Details
      v-stepper-content.pa-0(step="2")
        v-card(:height="avatarSize*3")
          v-row
            v-col
              v-row
                v-card-text.justify-center.text-center
                  h2.font-weight-medium.mb-5  About Anugrah
              v-row
                v-divider
              v-row.justify-center
                div.mt-4
                  a(href="https://students.iitj.ac.in/office-bearers/tel:9610942435") +91-9610942435
              v-row.justify-center
                div
                  v-row
                    v-icon  mdi-email
                    v-text.ma-2.pa-2 kumar.14@iitj.ac.in
              v-row.justify-center.align-end.pa-0.ma-0.fh
                v-divider
              v-row.justify-center.mt-2.pa-0
                v-btn(@click="cardPage = 1" text)
                  v-icon mdi-refresh
                  v-text Back

</template>

<script>
export default {
  name: "OfficeBearerCard",
  props: {
    avatarSize: { Type: Number }
  },
  data() {
    return {
      cardPage: 0
    };
  }
};
</script>

<style scoped>
.fh {
  height: 50%;
}
</style>
