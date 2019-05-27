<template>
  <div id="app">
    <v-app>
      <v-container fluid fill-heignt class="loginOverlay">
        <v-layout flex align-center offset-xs5 fill-height justify-center>
          <v-flex xs11 sm6 elevation-6>
            <!--Header-->
            <v-toolbar class="pt-2 blue darken-4">
              <v-toolbar-title class="white--text "
                ><h4>Login</h4></v-toolbar-title
              >
            </v-toolbar>
            <!--Header-->
            <!--Body-->
            <v-card>
              <v-card-text class="pt-4">
                <div>
                  <v-form v-model="valid" ref="form">
                    <v-text-field
                      outline
                      prepend-icon="mdi-email "
                      label="Username"
                      v-model="email"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                    <!--mdi-visibility not working fix it-->
                    <v-text-field
                      outline
                      prepend-icon="mdi-lock"
                      :append-icon="
                        e1 ? 'mdi-visibility' : 'mdi-visibility_off'
                      "
                      :append-icon-cb="() => (e1 = !e1)"
                      :rules="passwordRules"
                      :type="e1 ? 'password' : 'text'"
                      label="Password"
                      min="8"
                      required
                      v-model="password"
                    ></v-text-field>
                    <v-layout justify-center>
                      <v-btn color="pink" class="white--text">Login</v-btn>
                    </v-layout>
                    <v-layout justify-center>
                      <p>Or</p>
                    </v-layout>
                    <v-layout justify-center>
                      <v-btn dark>
                        <!--ADD GOOGLE SIGN IN HERE-->
                        <v-icon> mdi-google</v-icon>
                      </v-btn>
                    </v-layout>
                  </v-form>
                </div>
              </v-card-text>
            </v-card>
            <!--Body-->
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      e1: false,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [v => !!v || "E-mail is required"]
    };
  }
};
</script>

<style>
#app {
  background-image: url("../assets/workstation-336369.jpg");
  background-size: cover;
  overflow: hidden;
}
hr {
  height: 0;
}
</style>
