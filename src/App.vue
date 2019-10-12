<template lang="pug">
  v-app
    v-content
      div(v-if="!isHome")
        Header
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
        this.$router.currentRoute.path.toString() === "/konnekt" || "/konnekt/";
    }
  },
  watch: {
    $route() {
      this.updateBackground();
    }
  }
};
</script>
