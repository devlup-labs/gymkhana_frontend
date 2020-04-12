<template lang="pug">
  v-layout(row).justify-center.ma-2
    v-flex.md4
      v-card.elevation-6
        v-img(
          v-if="profile.avatar.sizes"
          :src="profile.avatar.sizes.find(e => e.name === 'full_size').url" max-height="200"
        )
        v-img(
          v-else
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK"
          max-height="200"
        )
    v-flex.md4
      v-layout(column).align-center.ma-4
        v-flex.mt-4 {{ profile.user.firstName }} {{ profile.user.lastName }}
        v-flex.mt-4
          a(:href="`tel:${profile.phone}`").no-decoration {{ profile.phone }}
        //v-flex.pa-4
          v-layout(row)
            v-btn(icon v-for="(sl,l) in volunteer.socialLinks" :key="l" :href="sl.link")
              v-icon.pa-2 {{sl.icon}}
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
