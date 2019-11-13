<template lang="pug">
  v-app
    v-content
      Header(v-if="!isHome")
      router-view
</template>

<script>
import Header from "./components/common/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data: () => ({ isHome: true }),
  mounted() {
    this.updateBackground();
  },
  methods: {
    updateBackground() {
      this.isHome =
        this.$router.currentRoute.path.toString() === "/konnekt" ||
        this.$router.currentRoute.path.toString() === "/konnekt/" ||
        this.$router.currentRoute.path.toString() === "/konnekt/search" ||
        this.$router.currentRoute.path.toString() === "/konnekt/search/";
    }
  },
  watch: {
    $route() {
      this.updateBackground();
    }
  }
};
</script>
