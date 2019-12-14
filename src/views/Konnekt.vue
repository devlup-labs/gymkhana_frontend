<template lang="pug">
  v-flex(:class="$router.currentRoute.name === 'konnekt-home' ? 'konnekt-background' : ''")
    router-view
</template>

<script>
export default {
  name: "Konnekt"
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
