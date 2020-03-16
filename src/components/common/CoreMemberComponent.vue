<template lang="pug">
  v-layout(row).justify-center.ma-2
    v-flex.md6
      v-card.elevation-6
        v-img(:src="memberData.avatar" max-height="200")
    v-flex.md6
      v-layout(column).align-center.ma-4
        v-flex.mt-4 {{memberData.user.firstName}}
        v-flex.mt-4 {{memberData.phone}}
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

<style scoped></style>
