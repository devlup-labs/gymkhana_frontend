<template lang="pug">
  v-content.justify-center(justify-center)
    v-card.text-lg-center.text-xs-center.text-md-center(class="blue text-center")
      v-card-text(class="white--text")
        h2.font-weight-regular Office Bearer
    v-container
      v-row
        v-col(cols="12" md="4" v-for="x in 3")
          OfficeBearerCard(:avatarSize="120")
</template>

<script>
import Toolbar from "../components/common/Toolbar";
import OfficeBearerCard from "../components/OfficeBearerCard";
export default {
  name: "OfficeBearers",
  components: {
    Toolbar,
    OfficeBearerCard
  }
};
</script>

<style scoped></style>
