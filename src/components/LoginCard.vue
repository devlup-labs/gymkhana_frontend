<!--suppress CheckImageSize -->
<template>
  <div>
    <v-toolbar class="pt-2 blue darken-4">
      <v-toolbar-title class="white--text "><h4>Login</h4></v-toolbar-title>
    </v-toolbar>
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

            <v-text-field
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :append-icon-cb="() => (showPassword = !showPassword)"
              :rules="passwordRules"
              :type="showPassword ? 'password' : 'text'"
              label="Password"
              min="8"
              required
              v-model="password"
            ></v-text-field>
            <v-layout justify-center>
              <v-btn color="pink" class="white--text">Login</v-btn>
            </v-layout>
            <v-layout justify-center>
              <p>OR</p>
            </v-layout>
            <v-layout justify-center>
              <v-btn outline color="white">
                <img
                  src="../assets/btn_google_light_normal.svg"
                  height="90"
                  alt="sign in google"
                />
              </v-btn>
            </v-layout>
          </v-form>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginCard",
  data() {
    return {
      valid: false,
      showPassword: false,
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [v => !!v || "E-mail is required"]
    };
  }
};
</script>

<style scoped></style>
