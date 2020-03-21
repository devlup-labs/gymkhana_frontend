<template lang="pug">
  v-stepper(v-model="cardPage").pa-0
    v-stepper-items
      v-stepper-content.pa-0(step="1")
        v-card(:height="avatarSize * 3")
          v-img(
            v-if="profile.cover.sizes"
            :src="profile.cover.sizes.find(e => e.name === 'full_size').url"
            :height="avatarSize"
          )
          v-img(v-else src="../assets/cover4.svg" :height="avatarSize")
          v-card-text.pt-0.text-center
            v-avatar.elevation-4.ma-2(
              :size="avatarSize"
              v-if="profile.avatar.sizes"
              :style="{'margin-top': `-${avatarSize / 2}px !important`}"
            )
              v-img(:src="profile.avatar.sizes.find(e => e.name === 'full_size').url")
            v-avatar.elevation-4.ma-2(
              v-else
              :size="avatarSize"
              :style="{'margin-top': `-${avatarSize / 2}px !important`}"
            )
              v-img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK")
            h2(class="black--text").font-weight-bold.mt-5 {{ profile.user.firstName }} {{ profile.user.lastName }}
            p.font-weight-regular.mt-2 {{ designation.toString() }}
          v-card-actions
            v-row(justify="center")
              v-btn(@click="cardPage=2" text) Details
                v-icon(right) mdi-arrow-right
      v-stepper-content.pa-0(step="2")
        v-card(:height="avatarSize*3")
          v-row
            v-col
              v-row
                v-card-text.justify-center.text-center
                  h2.font-weight-medium.mb-5  About {{ profile.user.firstName }}
              v-row
                v-divider
              v-row.justify-center.mt-4
                v-icon(left color="primary") mdi-phone
                a(:href="`tel:${profile.phone}`").no-decoration +91-{{ profile.phone }}
              v-row.justify-center
                div
                  v-row.ma-4
                    v-icon(left color="primary")  mdi-email
                    a(:href="`mailto:${profile.user.email}`").no-decoration {{ profile.user.email }}
              v-row.justify-center.align-end.pa-0.ma-0.fill-height-card-back
                v-divider
              v-row.justify-center.mt-2.pa-0
                v-btn(@click="cardPage=1" text)
                  v-icon(left) mdi-arrow-left
                  |  Back
</template>

<script>
export default {
  name: "OfficeBearerCard",
  props: {
    avatarSize: { Type: Number, required: true },
    profile: { type: Object, required: true },
    designation: String
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
