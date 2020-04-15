<template lang="pug">
  ProfileTemplate(v-if="!$apollo.queries.profile.loading" :user="profile.edges[0].node.user")
  
</template>

<script>
import { GET_USER_PROFILE_QUERY } from "../graphql/queries/getUserProfileQuery";
import ProfileTemplate from "../components/konnekt/ProfileTemplate";

export default {
  name: "UserProfile",
  components: { ProfileTemplate },
  apollo: {
    profile: {
      query: GET_USER_PROFILE_QUERY,
      variables() {
        return {
          roll: this.$route.params.roll
        };
      }
    },
    $client: "private"
  }
};
</script>

<style scoped></style>
