<template lang="pug">
  v-layout(column).align-center.mt-8.title
    v-flex
      v-avatar.elevation-4.ma-2(size="180")
        v-img(v-if="captainData.avatar.sizes" :src="captainData.avatar.sizes[1].url")
        v-img(v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK")
    v-flex.mt-4.font-weight-medium
      | {{captainData.user.firstName}} {{captainData.user.lastName}}
    v-flex(class="blue--text").mt-2.font-weight-light
      v-icon( left) mdi-phone
      | {{captainData.phone}}
    v-flex.mt-2.font-weight-light
      | HEAD
    v-flex.mt-2.font-weight-regular.subtitle-1.text-center
      | {{captainData.about}}
    //v-flex.pa-4
      v-layout(row)
        v-btn(icon v-for="(slink,n) in person.socialLinks" :key="n" :href="slink.link")
          v-icon.pa-2 {{slink.icon}}
</template>

<script>
export default {
  name: "CaptainComponent",
  props: {
    captainData: null
  }
};
</script>

<style scoped></style>
