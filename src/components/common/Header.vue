<template lang="pug">
  v-app-bar.px-md-12(app dark dense)
    img.mr-4(:src="logo" height="40")

    v-toolbar-items
    v-btn(text :to="{name: 'home'}" exact) Home
    v-menu(bottom=''  offset-y transition='slide-y-transition')
      template(v-slot:activator='{ on }')
        v-btn(text dark v-on='on')
          | Societies
          v-icon(right) mdi-chevron-down
      v-list
        v-list-item(v-for='({node}, i) in societies.edges' :key='i' link :to="{name: 'society', params: {slug: node.slug}}")
          v-list-item-title {{ node.name }}
    v-btn(text) Forum
    v-btn(text :to="{name: 'office-bearers'}") People
    v-spacer
</template>

<script>
import GymkhanaLogo from "../../assets/logo.png";
import { GET_SOCIETIES_QUERY } from "../../graphql/queries/societyQuery";
export default {
  apollo: {
    societies: {
      query: GET_SOCIETIES_QUERY
    }
  },
  name: "Header",
  computed: {
    logo: () => GymkhanaLogo
  },
  methods: {
    socList() {
      // console.log("a");
    }
  },
  data: () => ({
    societyList: ["a", "B"]
  }),
  mounted() {
    this.socList();
  }
};
</script>

<style scoped></style>
