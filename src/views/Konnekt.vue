<template lang="pug">
  div
    Toolbar :title="this.$options.name" />
    Home
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

<style scoped></style>
