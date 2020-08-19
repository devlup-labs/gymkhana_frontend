<template lang="pug">
  v-layout(row).justify-center.ma-2
    v-flex.md4
      v-card.elevation-6
        v-img(
          :src="profile.avatar.sizes.length?profile.avatar.sizes.find(e => e.name === 'medium_square_crop').url:require('@/assets/avatar_default.png')"
        )
    v-flex.md4
      v-layout(column).align-center.ma-4
        v-flex.mt-4 {{ profile.user.firstName }} {{ profile.user.lastName }}
        v-flex.mt-4
          a(:href="`tel:${profile.phone}`").no-decoration {{ profile.phone }}
        v-flex.pa-4
          v-layout(row)
            v-btn.ma-1(
              v-for="({node}, i) in profile.socialLinks.edges"
              :key="i"
              :color="$vuetify.theme.options.socialMediaIconMap[node.socialMedia].color"
              rounded
              :href="node.link"
              target="blank"
            ).white--text
              v-icon {{ $vuetify.theme.options.socialMediaIconMap[node.socialMedia].icon }}
</template>

<script>
export default {
  name: "CoreMemberComponent",
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
  color: deepskyblue;
}
</style>
