<template>
  <div id="app">
    <v-app>
      <v-container fluid fill-heignt class="loginOverlay">
        <v-layout flex justify-start></v-layout>
        <v-layout flex align-center offset-xs5 fill-height justify-center>
          <v-flex xs11 sm6 elevation-6>
            <!--Header-->

            <!--Header-->
            <LoginCard />
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      showPassword: false,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [v => !!v || "E-mail is required"]
    };
  },
  components: {
    LoginCard
  }
};
</script>

<style>
#app {
  background-image: url("../assets/workstation-336369.jpg");
  background-size: cover;
  overflow: hidden;
}
</style>
