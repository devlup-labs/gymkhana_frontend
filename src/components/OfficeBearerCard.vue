<template lang="pug">
  v-stepper(v-model="cardPage").pa-0
    v-stepper-items
      v-stepper-content.pa-0(step="1")
        v-card(:height="avatarSize * 3")
          v-img(
            :src="profile.cover.sizes.length?profile.cover.sizes.find(e => e.name === 'full_size').url:require('@/assets/cover4.svg')"
            :height="avatarSize"
          )
          v-card-text.pt-0.text-center
            v-avatar.elevation-4.ma-2(
              :size="avatarSize"
              :style="{'margin-top': `-${avatarSize / 2}px !important`}"
            )
              v-img(:src="profile.avatar.sizes.length?profile.avatar.sizes.find(e => e.name === 'full_size').url:require('@/assets/avatar_default.png')")
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
              v-row.fill-height.fill-height-card-back
                v-col.text-center
                  v-btn.ma-1(
                    v-for="({node}, i) in profile.socialLinks.edges"
                    :key="i"
                    :color="$vuetify.theme.options.socialMediaIconMap[node.socialMedia].color"
                    rounded
                    :href="node.link"
                    target="blank"
                  ).white--text
                    v-icon {{ $vuetify.theme.options.socialMediaIconMap[node.socialMedia].icon }}
              v-row.justify-center.align-end.pa-0.ma-0
                v-divider
              v-row.justify-center.mt-2.pa-0
                v-btn(@click="cardPage=1" text)
                  v-icon(left) mdi-arrow-left
                  | Back
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
  max-height: 110px !important;
}
.no-decoration {
  text-decoration: none;
  color: black;
}
</style>
