<template lang="pug">
  v-app-bar.px-md-12(app dark dense).elevation-0(v-if="!$apollo.queries.societies.loading")
    img.mr-4(:src="logo" height="40")
    v-toolbar-items
      v-btn(text :to="{name: 'home'}" exact) Home
      v-menu(bottom=''  offset-y transition='slide-y-transition')
        template(v-slot:activator='{ on }')
          v-btn(text dark v-on='on')
            | Societies
            v-icon(right) mdi-chevron-down
        v-list
          v-list-item(v-for='({ node }, i) in societies.edges' :key='i' link :to="{name: 'society', params: {slug: node.slug}}")
            v-list-item-title {{ node.name }}
      v-btn(text :to="{name: 'konnekt-home'}") Forum
      v-btn(text :to="{name: 'office-bearers'}") People
    v-spacer
</template>

<script>
import GymkhanaLogo from "../../assets/logo.png";
import gql from "graphql-tag";

export default {
  apollo: {
    societies: gql`
      query {
        societies {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `
  },
  name: "Header",
  computed: {
    logo: () => GymkhanaLogo
  }
};
</script>

<style scoped></style>
