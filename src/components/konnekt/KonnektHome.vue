<template lang="pug">
  v-container
    v-layout(row justify-center mt-3 pt-1 fill-height)
      v-flex(lg6 xs6 offset-xs3)
        v-text-field(
          outline
          v-model="searchTerm"
          prepend-inner-icon="mdi-magnify"
          label="search any skill or name"
          @keyup.enter="search"
          clearable)
      v-flex
        v-btn(large color="primary" @click="search") GO
</template>

<script>
export default {
  name: "KonnektHome",
  data: () => ({
    searchTerm: ""
  }),
  methods: {
    search() {
      this.$router.push({
        name: "konnekt-search",
        query: { searchTerm: this.searchTerm }
      });
    }
  }
};
</script>

<style scoped />
