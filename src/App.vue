<template lang="pug">
  v-app
    SidenavHeader(v-if="!!$router.currentRoute.meta.sidenav")
    Header(v-else)
    v-content
      router-view
    Footer(v-if="!$router.currentRoute.meta.sidenav")
</template>

<script>
import Header from "./components/common/headers/Header";
import SidenavHeader from "./components/common/headers/SidenavHeader";
import Footer from "./components/common/Footer";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    SidenavHeader
  }
};
</script>

<style scoped>
main.v-content {
  z-index: 1;
}
</style>
