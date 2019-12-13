<template lang="pug">
  div( :class="{ 'konnekt-background': isHome }")
    SidenavHeader(:title="this.$options.name")
    v-flex
      router-view
</template>

<script>
import SidenavHeader from "../components/SidenavHeader";

export default {
  name: "Konnekt",
  components: {
    SidenavHeader
  },
  data: () => ({ isHome: true }),
  mounted() {
    this.updateBackground();
  },
  methods: {
    updateBackground() {
      this.isHome =
        this.$router.currentRoute.path.toString() === "/konnekt" ||
        this.$router.currentRoute.path.toString() === "/konnekt/";
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
