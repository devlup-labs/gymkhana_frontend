<template lang="pug">
  v-app
    SidenavHeader(v-if="!!$router.currentRoute.meta.sidenav")
    Header(v-else)
    v-content
      router-view
    Footer
</template>

<script>
import Header from "./components/common/Header";
import SidenavHeader from "./components/common/SidenavHeader";
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
