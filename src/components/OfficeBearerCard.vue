<template lang="pug">
  v-stepper(v-model="cardPage").pa-0
    v-stepper-items
      v-stepper-content.pa-0(step="1")
        v-card(:height="avatarSize*3")
          v-img(v-if="bearerData.cover.sizes" :src="bearerData.cover.sizes[1].url" :height="avatarSize")
          v-img(v-else src="../assets/cover4.svg" :height="avatarSize")
          v-card-text.pt-0.text-center
            v-avatar.elevation-4.ma-2(:size="avatarSize" v-if="bearerData.avatar.sizes" :style="{'margin-top': `-${avatarSize/2}px !important`}")
              v-img(:src="bearerData.avatar.sizes[1].url")
            v-avatar.elevation-4.ma-2(:size="avatarSize" v-else :style="{'margin-top': `-${avatarSize/2}px !important`}")
              v-img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK")
            h2(class="black--text").font-weight-bold.mt-5 {{bearerData.user.firstName}} {{bearerData.user.lastName}}
            p.font-weight-regular.mt-2 Seceretary
          v-card-actions
            v-row(justify="center")
              v-btn(@click="cardPage = 2" text) Details
                v-icon(right) mdi-arrow-right
      v-stepper-content.pa-0(step="2")
        v-card(:height="avatarSize*3")
          v-row
            v-col
              v-row
                v-card-text.justify-center.text-center
                  h2.font-weight-medium.mb-5  About {{bearerData.user.firstName}}
              v-row
                v-divider
              v-row.justify-center.mt-4
                v-icon(left color="primary") mdi-phone
                a(:href="`tel:${bearerData.phone}`").no-decoration +91-{{bearerData.phone}}
              v-row.justify-center
                div
                  v-row.ma-4
                    v-icon(left color="primary")  mdi-email
                    a(:href="`mailto:${bearerData.user.email}`").no-decoration {{bearerData.user.email}}
              v-row.justify-center.align-end.pa-0.ma-0.fill-height-card-back
                v-divider
              v-row.justify-center.mt-2.pa-0
                v-btn(@click="cardPage = 1" text)
                  v-icon(left) mdi-arrow-left
                  |  Back
</template>

<script>
export default {
  name: "OfficeBearerCard",
  props: {
    avatarSize: { Type: Number },
    bearerData: null
  },
  data() {
    return {
      cardPage: 0
    };
  }
};
</script>

<style scoped>
.fill-height-card-back {
  height: 50%;
}
.no-decoration {
  text-decoration: none;
  color: black;
}
</style>
