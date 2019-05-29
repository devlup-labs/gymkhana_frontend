<!--suppress CheckImageSize -->
<template>
  <div>
    <v-toolbar class="primary">
      <v-toolbar-title class="white--text">
        <p class="headline mb-0">Login</p>
      </v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-text class="pt-4">
        <div>
          <v-form v-model="valid" ref="form">
            <v-text-field
              outline
              prepend-icon="mdi-email "
              label="Email"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>

            <v-text-field
              outline
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (showPassword = !showPassword)"
              :rules="passwordRules"
              :type="showPassword ? 'password' : 'text'"
              label="Password"
              min="8"
              required
              v-model="password"
            ></v-text-field>
            <v-layout justify-center>
              <v-btn color="primary">Login</v-btn>
            </v-layout>
            <v-layout justify-center>
              <h4>OR</h4>
            </v-layout>
            <v-layout justify-center>
              <a href="#">
                <img
                  :src="googleSignInBtn"
                  class="gsign-responsive"
                  alt="sign in google"
                />
              </a>
            </v-layout>
          </v-form>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import googleSignInBtn from "../assets/btn_google_light_normal.svg";
export default {
  name: "LoginCard",
  data() {
    return {
      valid: false,
      showPassword: false,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [v => !!v || "E-mail is required"],
      googleSignInBtn
    };
  }
};
</script>

<style scoped>
.gsign-responsive {
  width: 100%;
  height: auto;
}
</style>
