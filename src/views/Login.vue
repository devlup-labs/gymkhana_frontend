<template>
  <v-container fluid fill-heignt class="loginOverlay">
    <v-layout flex justify-start></v-layout>
    <v-layout flex align-center offset-xs5 fill-height justify-center>
      <v-flex xs11 sm6 elevation-6>
        <LoginCard />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";
export default {
  name: "Login",
  components: {
    LoginCard
  }
};
</script>

<style></style>
