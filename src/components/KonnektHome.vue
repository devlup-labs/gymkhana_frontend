<template>
  <div class="konnekt-background">
    <v-container>
      <v-layout row justify-center mt-5 pt-4 fill-height>
        <v-flex lg6 offset-xs3
          ><v-text-field
            outline
            prepend-inner-icon="mdi-magnify"
            label="search any skill or name"
            clearable
          ></v-text-field
        ></v-flex>
        <v-flex
          ><v-btn color="primary" v-on:click="goToSearch">GO</v-btn></v-flex
        >
      </v-layout>
    </v-container>
  </div>
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
