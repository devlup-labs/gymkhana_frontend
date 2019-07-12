<template>
  <div class="konnekt-background">
    <Toolbar />
    <Home />
  </div>
</template>

<script>
import Home from "../components/KonnektHome";
import Toolbar from "../components/Toolbar";

export default {
  name: "Konnekt",
  components: {
    Toolbar,
    Home
  }
};
</script>

<style scoped>
.konnekt-background {
  height: 100%;
  background: url("../assets/konnekt/konnekt.svg") no-repeat center;
  background-size: cover;
}
</style>
