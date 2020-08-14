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
    v-container.ms-5(v-if="!$apollo.queries.nodes.loading && nodes && searchTerm && searchTerm.length>=3")
      div(v-for="({ node },i) in nodes.edges" :key="i")
        v-container.container
          v-layout.card( row wrap flex-center)
            v-flex(xs3 lg2 md2 pa-3 layout justify-center)
              a(@click="goToProfile(node.roll)")
                v-avatar.elevation-4(size="100" :tile="false" )
                  v-img(:src="node.avatar.sizes.length?node.avatar.sizes.find(e=>e.name==='full_size').url:require('@/assets/avatar_default.png')" alt="Image")
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
              a(@click="goToProfile(node.roll)")
                h2.mb-3.font-weight-light.black--text {{ node.user.firstName }} {{ node.user.lastName }}
            v-flex(
              v-if="node.skills"
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
                @click="searchChip(skill)"
              ) {{ skill }}
      v-row.justify-center(v-if="!this.nodes || !this.nodes.edges.length").display-1
        | There are no results
    v-container(v-if="this.$apollo.queries.nodes.loading")
      v-row.justify-center.align-center
        v-progress-circular(indeterminate color="primary")
        span.ml-5 Fetching Data... Please wait
</template>

<script>
import { SEARCH_USER_PROFILE_QUERY } from "../../graphql/queries/searchUserProfilesQuery";

export default {
  apollo: {
    nodes: {
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
    searchTerm: ""
  }),
  created() {
    if (this.$route.query.searchTerm) {
      this.searchTerm = this.$route.query.searchTerm;
    }
  },
  methods: {
    searchChip(skill) {
      this.searchTerm = skill;
    },
    goToProfile(roll) {
      this.$router.push({ name: "profile-view", params: { roll: roll } });
    }
  }
};
</script>

<style scoped />
