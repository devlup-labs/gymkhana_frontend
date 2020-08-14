<template lang="pug">
  div(v-if="!$apollo.loading")
    v-app-bar(clipped-left fixed app)
      v-app-bar-nav-icon.mx-n1(@click.stop="drawer= !drawer")
      v-toolbar-title.hidden-sm-and-down {{ title }}
      v-spacer
      v-toolbar-items(hidden-sm-and-down)
        v-menu(v-for="(item, i) in toolbarItems" :key="i")
          template(v-slot:activator="{ on }")
            v-btn(text v-on="on" :to="item.to" exact)
              v-icon(:left="$vuetify.breakpoint.mdAndUp") {{ item.icon }}
              span(v-if="$vuetify.breakpoint.mdAndUp") {{ item.title }}
              v-icon(v-if="$vuetify.breakpoint.mdAndUp && item.children") mdi-menu-down
          v-list(v-if="item.children")
            v-list-item
              v-btn(text block :to='{name : "profile"}' link) Account
            v-list-item
              v-btn(text block @click="logoutAuth") Logout
    v-navigation-drawer(v-model="drawer" app :clipped="$vuetify.breakpoint.lgAndUp" :mini-variant.sync="mini")
      template(v-slot:prepend)
        v-list-item(two-line v-if="!$apollo.queries.viewer.loading")
          v-list-item-avatar
            img(:src="viewer.userprofile.avatar.sizes.length?viewer.userprofile.avatar.sizes.find(e => e.name === 'full_size').url:require('@/assets/avatar_default.png')")
          v-list-item-content.text-start.pt-4
            v-list-item-title {{ viewer.firstName }}
            v-list-item-title {{ viewer.lastName }}
            v-list-item-subtitle {{ viewer.email }}
          v-list-item-action
            v-btn(icon @click.stop="mini = !mini")
              v-icon mdi-chevron-left
      v-divider
      v-list(dense rounded)
        v-list-group(v-for="(item, i) in drawerItems" v-if="item.children" :key="i" :append-icon="item.children ? $vuetify.expand : ''" :prepend-icon="item.icon")
          template(v-slot:activator)
            v-list-item-title {{ item.title }}
          v-list-item(v-if="item.children" v-for="(child, i) in item.children" :key="i" :to="child.to" link)
            v-list-item-icon
            v-list-item-title {{ child.title }}
        v-list-item(v-else :key="i" :to="item.to" link exact)
          v-list-item-icon
            v-icon {{ item.icon }}
          v-list-item-title {{ item.title }}
</template>

<script>
import { onLogout } from "../../../plugins/vue-apollo";
import { GET_SIDENAV_DATA_QUERY } from "../../../graphql/queries/sidenavDataQuery";

export default {
  name: "SidenavHeader",
  props: { title: { type: String } },
  apollo: {
    viewer: {
      query: GET_SIDENAV_DATA_QUERY
    },
    $client: "private"
  },
  data: () => ({
    item: true,
    drawer: null,
    mini: false,
    toolbarItems: [
      { title: "Forum", icon: "mdi-forum", to: { name: "forum-home" } },
      { title: "Konnekt", icon: "mdi-web", to: { name: "konnekt-home" } },
      {
        title: "Account",
        icon: "mdi-account",
        children: [
          { title: "Profile", to: { name: "profile" } },
          { title: "Logout" }
        ]
      }
    ],
    drawerItems: [
      { title: "Profile", icon: "mdi-account", to: { name: "profile" } },
      {
        title: "Categories",
        icon: "mdi-database",
        children: [
          { title: "All questions", to: { name: "forum-home" } },
          { title: "Answered by you", to: { name: "forum-topics-answered" } }
        ]
      },
      { title: "Home", icon: "mdi-home", to: { name: "home" } },
      { title: "Help", icon: "mdi-help" },
      { title: "About", icon: "mdi-information" }
    ]
  }),
  methods: {
    logoutAuth() {
      onLogout(this.$apollo.provider.clients.private).then(() => {
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style scoped></style>
