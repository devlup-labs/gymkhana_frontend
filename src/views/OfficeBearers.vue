<template lang="pug">
  v-content.justify-center(justify-center)
    v-card.text-center(class="blue text-center mx-auto" max-width="800").mt-4
      v-card-text(class="white--text")
        h1.font-weight-regular Office Bearers
    v-container(v-for="({node},i) in societies.edges.flatMap(e=>e) " :key="i")
      v-card-title.display-1.justify-center {{node.name}}
      v-row
        v-col(cols="12" md="4")
          OfficeBearerCard(:avatarSize="120" :bearerData="node.mentor")
        v-col(cols="12" md="4")
          OfficeBearerCard(:avatarSize="120" :bearerData="node.secretary")
        v-col(cols="12" md="4")
          OfficeBearerCard(:avatarSize="120" :bearerData="node.jointSecretary")
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
  },
  mounted() {
    console.log("lodssg");
    var data = [];
    this.societies.edges.flatMap(e => data.push(e));
    console.log(data);
  }
};
</script>

<style scoped />
