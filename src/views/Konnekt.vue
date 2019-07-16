<template>
  <div :class="{ 'konnekt-background': isHome }">
    <Toolbar :title="this.$options.name" />
    <v-flex>
      <router-view />
    </v-flex>
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";

export default {
  name: "Konnekt",
  components: {
    Toolbar
  },
  computed: {
    isHome() {
      return this.$router.currentRoute.path.toString() === "/konnekt";
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
