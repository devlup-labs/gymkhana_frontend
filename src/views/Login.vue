<template lang="pug">
  v-container(fluid fill-height)
    v-layout(flex align-center offset-md5 fill-height justify-center)
      v-flex( xs10 sm8 lg6)
        LoginCard
</template>

<script>
import LoginCard from "../components/LoginCard.vue";
import { onLogin } from "@/plugins/vue-apollo";
import { G_SIGN_IN_MUTATION } from "@/graphql/mutations/googleSignInMutation";
export default {
  name: "Login",
  components: {
    LoginCard
  },
  methods: {
    check_auth() {
      if (this.$route.query.key) {
        this.$apollo
          .mutate({
            mutation: G_SIGN_IN_MUTATION,
            variables: {
              accessToken: this.$route.query.key,
              provider: "google-oauth2"
            }
          })
          .then(data => {
            onLogin(
              this.$apollo.provider.clients.private,
              data.data.socialAuth.token
            );
            if (!data.data.socialAuth.social.user.userprofile) {
              this.$router.push({ name: "register" });
            } else {
              //Redirect
              let to = "konnekt-home";
              if (this.$route.query.to) {
                to = this.$route.query.to;
              }
              this.$router.push({ name: to });
            }
          })
          .catch(error => {
            // Error
            alert(error.message);
          });
      }
    }
  },
  mounted() {
    this.check_auth();
  }
};
</script>

<style></style>
