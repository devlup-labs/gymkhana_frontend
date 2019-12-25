<template lang="pug">
  v-app-bar.px-md-12(app dark dense)
    img.mr-4(:src="logo" height="40")

    v-toolbar-items
    v-btn(text :to="{name: 'home'}") Home
    v-btn(text :to="{name : 'societies'}") Societies
    v-btn(text) Forum
    v-btn(text :to="{name: 'office-bearers'}") People
    v-spacer
</template>

<script>
import GymkhanaLogo from "../../assets/logo.png";
export default {
  name: "Header",
  computed: {
    logo: () => GymkhanaLogo
  }
};
</script>

<style scoped></style>
