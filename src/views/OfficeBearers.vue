<template lang="pug">
  v-content.justify-center(justify-center v-if="!$apollo.queries.societies.loading")
    v-card.text-center(class="blue text-center mx-auto" max-width="800").mt-4
      v-card-text(class="white--text")
        h1.font-weight-regular Office Bearers
    v-container(v-for="({ node }, i) in societies.edges" :key="i")
      v-card-title.display-1.justify-center {{ node.name }}
      v-row.justify-space-around
        v-col(cols="12" md="4" sm="6")
          OfficeBearerCard(:avatarSize="120" :profile="node.mentor" :designation="'Mentor'")
        v-col(cols="12" md="4" sm="6")
          OfficeBearerCard(:avatarSize="120" :profile="node.secretary" :designation="'Secretary'")
        v-col(cols="12" md="4" sm="6")
          OfficeBearerCard(:avatarSize="120" :profile="node.jointSecretary" :designation="'Joint Secretary'")
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
