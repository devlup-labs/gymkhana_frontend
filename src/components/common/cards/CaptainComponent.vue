<template lang="pug">
  v-layout(column).align-center.mt-8.title
    v-flex
      v-avatar.elevation-4.ma-2(size="180")
        v-img(
          v-if="profile.avatar.sizes"
          :src="profile.avatar.sizes.find(e => e.name === 'full_size').url"
        )
        v-img(
          v-else
          src="require('@/assets/avatar_default.png')"
        )
    v-flex.mt-4.font-weight-medium
      | {{ profile.user.firstName }} {{ profile.user.lastName }}
    v-flex.mt-2.font-weight-light
      v-icon( left).pb-1 mdi-phone
      a(:href="`tel:${profile.phone}`").no-decoration {{ profile.phone }}
    v-flex.mt-2.font-weight-light
      | {{ designation }}
    v-flex.mt-2.font-weight-regular.subtitle-1.text-center
      | {{ profile.about }}
    //v-flex.pa-4
      v-layout(row)
        v-btn(icon v-for="(slink,n) in person.socialLinks" :key="n" :href="slink.link")
          v-icon.pa-2 {{slink.icon}}
</template>

<script>
export default {
  name: "CaptainComponent",
  props: {
    profile: { type: Object, required: true },
    designation: String
  }
};
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
  color: deepskyblue;
}
</style>
