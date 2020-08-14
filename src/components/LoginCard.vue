<template lang="pug">
  div
    v-toolbar(color="primary" )
      v-toolbar-title.white--text
        p.headline.mb-0 Login
    v-card.tile
      v-card-text(pt-4)
        div
          v-form(v-model="valid" ref="form" @submit.prevent="loginAuth")
            v-text-field(
              outline
              prepend-icon="mdi-email"
              label="Email"
              v-model="email"
              :rules="emailRules"
              required
            )

            v-text-field(
              outline
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="() => (showPassword = !showPassword)"
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              min="8"
              required
              v-model="password"
            )
            v-layout(justify-center)
              v-btn(color="primary" type="submit") Login
            v-layout(justify-center)
              h4 OR
            v-layout(justify-center)
              a(href="login/google-oauth2/")
                img(
                  :src="googleSignInBtn"
                  class="gsign-responsive"
                  alt="sign in google"
                )

</template>
<script>
import googleSignInBtn from "../assets/btn_google_light_normal.svg";
import { onLogin } from "../plugins/vue-apollo";
import { AUTHORIZATION_MUTATION } from "../graphql/mutations/authMutation";

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
  },
  methods: {
    loginAuth() {
      this.$apollo
        .mutate({
          mutation: AUTHORIZATION_MUTATION,
          // Parameters
          variables: {
            username: this.email,
            password: this.password
          }
        })
        .then(data => {
          onLogin(
            this.$apollo.provider.clients.private,
            data.data.tokenAuth.token
          );
          this.$router.push({ name: this.$route.query.to });
        })
        .catch(error => {
          // Error
          alert(error.message);
        });
    }
  }
};
</script>

<style scoped>
.gsign-responsive {
  width: 100%;
  height: auto;
}
</style>
