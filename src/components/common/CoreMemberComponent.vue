<template lang="pug">
  v-layout(row).justify-center.ma-2
    v-flex.md6
      v-card.elevation-6
        v-img(v-if="memberData.avatar.sizes" :src="memberData.avatar.sizes[1].url" max-height="200")
        v-img(v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK" max-height="200")
    v-flex.md6
      v-layout(column).align-center.ma-4
        v-flex.mt-4 {{memberData.user.firstName}} {{memberData.user.lastName}}
        v-flex.mt-4
          a(:href="`tel:${memberData.phone}`").no-decoration {{memberData.phone}}
        //v-flex.pa-4
          v-layout(row)
            v-btn(icon v-for="(sl,l) in volunteer.socialLinks" :key="l" :href="sl.link")
              v-icon.pa-2 {{sl.icon}}
</template>

<script>
export default {
  name: "coreMemberComponent",
  props: {
    memberData: null
  }
};
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
  color: deepskyblue;
}
</style>
