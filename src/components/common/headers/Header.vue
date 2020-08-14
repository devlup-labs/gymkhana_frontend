<template lang="pug">
  v-app-bar.px-md-12(app dark dense v-if="!$apollo.queries.societies.loading")
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
      v-btn(text :to="{name: 'konnekt-home'}") Konnekt
      v-btn(text :to="{name: 'forum-home'}") Forum
      v-btn(text :to="{name: 'office-bearers'}") People
    v-spacer
</template>

<script>
import GymkhanaLogo from "../../../assets/logo.png";
import { HEADER_SOCIETY_LIST_QUERY } from "../../../graphql/queries/headerSocietyListQuery";

export default {
  apollo: {
    societies: {
      query: HEADER_SOCIETY_LIST_QUERY
    }
  },
  name: "Header",
  computed: {
    logo: () => GymkhanaLogo
  }
};
</script>

<style scoped></style>
