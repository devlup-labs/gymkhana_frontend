<template lang="pug">
  v-content.justify-center(justify-center)
    v-card.text-center(class="blue text-center mx-auto" max-width="800").mt-4
      v-card-text(class="white--text")
        h1.font-weight-regular Office Bearer
    v-container
      v-row
        v-col(cols="12" md="4" v-for="x in 3")
          OfficeBearerCard(:avatarSize="120")
</template>

<script>
import OfficeBearerCard from "../components/OfficeBearerCard";
export default {
  name: "OfficeBearers",
  components: {
    OfficeBearerCard
  }
};
</script>

<style scoped />
