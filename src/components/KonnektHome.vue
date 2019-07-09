<template lang="pug">
  div.konnekt-background
    v-container
      v-layout(row justify-center mt-3 pt-4 fill-height)
        v-flex(lg6 offset-xs3)
          v-text-field(
            outline
            prepend-inner-icon="mdi-magnify"
            label="search any skill or name"
            clearable)
        v-flex
          v-btn(large color="primary") GO
</template>

<script>
export default {
  name: "KonnektHome"
};
</script>

<style scoped>
.konnekt-background {
  height: 100%;
  background: url("../assets/konnekt/konnekt.svg") no-repeat center;
  background-size: cover;
}
</style>
