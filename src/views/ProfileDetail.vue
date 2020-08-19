<template lang="pug">
  v-flex
    ProfileTemplate(v-if="!$apollo.queries.viewer.loading" :user="viewer")
      template(v-slot:sLinkAdd)
        v-tooltip(left color="black" )
          template(v-slot:activator="{ on }")
            v-btn(
              color="accent darken-2"
              v-on="on"
              dark
              icon
            )
              v-icon(size="30") mdi-plus
          span Add Social Link! Coming Soon!
    v-tooltip(left color="black")
      template(v-slot:activator="{ on }")
        v-btn.ma-5(
          :to="{name: 'profile-edit'}"
          color="primary"
          v-on="on"
          dark
          fixed
          bottom
          right
          fab)
          v-icon mdi-pencil
      span Edit Your profile
</template>

<script>
import ProfileCard from "../components/ProfileCard";
import { VIEWER_PROFILE_QUERY } from "../graphql/queries/viewerProfileQuery";
import ProfileTemplate from "../components/konnekt/ProfileTemplate";
export default {
  name: "ProfileDetail",
  apollo: {
    viewer: {
      query: VIEWER_PROFILE_QUERY
    },
    $client: "private"
  },
  components: { ProfileTemplate, ProfileCard }
};
</script>

<style scoped />
