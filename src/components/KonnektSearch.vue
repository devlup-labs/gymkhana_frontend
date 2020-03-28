<template lang="pug">
  v-container
    v-responsive(min-width="40px")
      v-layout(row fill-height)
        v-flex(lg6 xs6 offset-xs3)
          v-text-field(
            v-model="searchTerm"
            outline
            prepend-inner-icon="mdi-magnify"
            label="Search any skill or name"
            clearable)
    v-container.ms-5(v-if="search")
      div(v-for="({ node },i) in search.edges" :key="i")
        v-container.container
          v-layout.card( row wrap flex-center)
            v-flex(xs3 lg2 md2 pa-3 layout justify-center)
              v-avatar.elevation-4(size="100" :tile="false")
                v-img(:src="node.avatar" alt="Image")
            v-flex(
              text-lg-center
              text-md-center
              text-xs-center
              align-center
              fill-height
              xs6
              lg1
              md1
              mt-5
              :class="{ 'pt-4 ms-4': $vuetify.breakpoint.smAndDown, 'pt-0': $vuetify.breakpoint.mdAndUp }"
            )
              h2.mb-3.font-weight-light {{ node.user.firstName }} {{ node.user.lastName }}
            v-flex(
              text-xs-center
              text-md-center
              xs12
              lg8
              md8
              :class="{ 'pt-3 mt-0': $vuetify.breakpoint.smAndDown, 'pt-1 mt-4': $vuetify.breakpoint.mdAndUp }"
            )
              v-chip.elevation-2.font-weight-bold.ma-1(
                xs2
                color="light-blue darken-1 white--text"
                v-for="(skill,i) in node.skills.split(',')"
                v-bind:key="i"
              ) {{ skill }}
</template>

<script>
import { SEARCH_USER_PROFILE_QUERY } from "../graphql/queries/searchUserProfilesQuery";

export default {
  apollo: {
    search: {
      query: SEARCH_USER_PROFILE_QUERY,
      variables() {
        return {
          query: this.searchTerm || ""
        };
      },
      skip() {
        if (this.searchTerm) return this.searchTerm.length < 3;
        else return false;
      }
    },
    $client: "private"
  },
  name: "KonnektSearch",
  data: () => ({
    searchTerm: null
  })
};
</script>

<style scoped />
