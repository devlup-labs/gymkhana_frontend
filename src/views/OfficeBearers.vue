<template lang="pug">
  v-content.justify-center()
    v-card.text-center(class="blue text-center mx-auto" max-width="800" v-if="!$apollo.queries.societies.loading").mt-4 
      v-card-text(class="white--text")
        h1.font-weight-regular Office Bearers 
    v-skeleton-loader(v-else loading="loading" type="heading" align="center" tile)
    v-container(v-for="({ node }, i) in societies.edges" :key="i" v-if=" node.mentor || node.secretary || node.jointSecretary ")
      v-card-title.display-1.justify-center {{ node.name }}
      v-skeleton-loader(v-if="$apollo.queries.societies.loading" loading="loading" type="heading" align="center" tile)
      v-row.justify-space-around(v-if=" node.mentor || node.secretary || node.jointSecretary ")
        v-col(cols="12" lg="4" sm="6" v-if="node.mentor")
          OfficeBearerCard(:avatarSize="120" :profile="node.mentor" :designation="'Mentor'" v-if="!$apollo.queries.societies.loading" )
          v-skeleton-loader(v-else loading="loading" type="card-avatar, actions")
        v-col(cols="12" lg="4" sm="6" v-if="node.secretary")
          OfficeBearerCard(:avatarSize="120" :profile="node.secretary" :designation="'Secretary'" v-if="!$apollo.queries.societies.loading")
          v-skeleton-loader(v-else loading="loading" type="card-avatar, actions")
        v-col(cols="12" lg="4" sm="6" v-if="node.jointSecretary")
          OfficeBearerCard(:avatarSize="120" :profile="node.jointSecretary" :designation="'Joint Secretary'" v-if="!$apollo.queries.societies.loading")
          v-skeleton-loader(v-else loading="loading" type="card-avatar, actions")
</template>

<script>
import OfficeBearerCard from "../components/OfficeBearerCard";
import { GET_OFFICE_BEARERS_QUERY } from "../graphql/queries/officeBearersQuery";

export default {
  apollo: {
    societies: {
      query: GET_OFFICE_BEARERS_QUERY
    }
  },
  name: "OfficeBearers",
  components: {
    OfficeBearerCard
  }
};
</script>

<style scoped />
