<template lang="pug">
  v-container
    v-layout(row justify-center mt-3 pt-1 fill-height)
      v-flex(lg6 xs6 offset-xs3)
        v-text-field(
          outline
          prepend-inner-icon="mdi-magnify"
          label="search any skill or name"
          clearable)
      v-flex
        v-btn(large color="primary" :to="{name : 'konnekt-search'}") GO
</template>

<script>
export default {
  name: "KonnektHome"
};
</script>

<style scoped />
