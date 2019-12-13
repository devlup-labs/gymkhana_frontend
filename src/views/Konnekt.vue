<template lang="pug">
  v-flex(:class="{ 'konnekt-background': isHome }")
    router-view
</template>

<script>
export default {
  name: "Konnekt",
  data: () => ({ isHome: true }),
  mounted() {
    this.updateBackground();
  },
  methods: {
    updateBackground() {
      this.isHome = this.$router.currentRoute.path.toString() === "/konnekt";
    }
  },
  watch: {
    $route() {
      this.updateBackground();
    }
  }
};
</script>

<style scoped>
/*noinspection CssUnusedSymbol*/
.konnekt-background {
  height: 100%;
  background: url("../assets/konnekt/konnekt.svg") no-repeat center;
  background-size: cover;
}
</style>
