<template>
  <div id="app">
    <v-app>
      <v-container fluid fill-heignt class="loginOverlay">
        <v-layout flex align-center offset-xs5 fill-height justify-center>
          <v-flex xs12 sm5 elevation-6>
            <v-toolbar class="pt-2 blue darken-4">
              <v-toolbar-title class="white--text "
                ><h4>Login</h4></v-toolbar-title
              >
            </v-toolbar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
#app {
  background-image: url("../assets/workstation-336369.jpg");
  background-size: cover;
  overflow: hidden;
}
</style>
