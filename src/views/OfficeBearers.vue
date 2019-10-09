<template lang="pug">
  div
    Toolbar(:title="this.$options.name")
    v-card.text-lg-center.text-xs-center.text-md-center(class="blue text-center").ma-5
     v-card-text(class="white--text")
      h1.font-weight-regular Office Bearers
    v-container(fluid fill-height)
      v-layout(flex align-center offset-md5 fill-height justify-center)
        v-flex( xs10 sm8 lg6)
          OfficeBearerCard
</template>

<script>
import Toolbar from "../components/Toolbar";
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
