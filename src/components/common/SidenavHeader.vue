<template lang="pug">
  div
    v-app-bar(clipped-left fixed app)
      v-app-bar-nav-icon.mx-n1(@click.stop="drawer= !drawer")
      v-toolbar-title.hidden-sm-and-down {{ title }}
      v-spacer
      v-toolbar-items(hidden-sm-and-down)
        v-menu(v-for="(item, i) in toolbarItems" :key="i")
          template(v-slot:activator="{ on }")
            v-btn(text v-on="on" :to="item.to" exact)
              v-icon(left) {{ item.icon }}
              span(v-if="$vuetify.breakpoint.mdAndUp") {{ item.title }}
              v-icon(v-if="$vuetify.breakpoint.mdAndUp && item.children") mdi-menu-down
          v-list(v-if="item.children")
            v-list-item(v-for="(child, i) in item.children" :key="i" :to="child.to")
              v-btn(text block) {{ child.title }}
    v-navigation-drawer(v-model="drawer" app :clipped="$vuetify.breakpoint.lgAndUp" :mini-variant.sync="mini")
      template(v-slot:prepend)
        v-list-item(two-line)
          v-list-item-avatar
            img(src="https://randomuser.me/api/portraits/women/81.jpg")
          v-list-item-content
            v-list-item-title John Smith
            v-list-item-subtitle john.smith@iitj.ac.in
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
export default {
  name: "SidenavHeader",
  props: { title: { type: String } },
  data: () => ({
    item: true,
    drawer: null,
    mini: false,
    toolbarItems: [
      { title: "Forum", icon: "mdi-forum", to: { name: "home" } },
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
        children: [{ title: "All questions" }, { title: "Answered by you" }]
      },
      { title: "Home", icon: "mdi-home", to: { name: "home" } },
      { title: "Help", icon: "mdi-help" },
      { title: "About", icon: "mdi-information" }
    ]
  })
};
</script>

<style scoped></style>
