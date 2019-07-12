<template lang="pug" xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
 div
  v-toolbar(clipped-left fixed app)
    v-toolbar-side-icon(@click.stop="drawer= !drawer")
    v-toolbar-title {{ title }}
    v-spacer
    v-toolbar-items(hidden-sm-and-down)
      v-btn(flat)
        v-icon mdi-forum
        span Forum
      v-btn(flat href="../konnekt")
        v-icon mdi-web
        span Konnekt
      v-menu
        template(v-slot:activator="{ on }")
          v-btn(flat v-on="on")
            v-icon mdi-account
            span Account
            v-icon mdi-menu-down
        v-list
          v-list-tile(v-for="item in AccountItems")
            v-btn(flat block color="blue") {{ item.title }}
  v-navigation-drawer(v-model="drawer" absolute temporary width="250")
    v-card(tile flat ripple color="blue" height="200")
      div.pt-3.pl-3
        v-avatar.elevation-2(size="80" :tile="false" color="white")
          v-img(src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png")
      v-card-text
        v-layout.pt-1
          v-flex
            p.white--text.font-weight-bold Name
        v-layout.pt-1
          v-flex
            p.white--text.font-weight-bold Email
    v-list.pt-0()
      v-list-tile(@click="")
        v-list-tile-action
          v-icon(light) mdi-account
        v-list-tile-content
          v-list-tile-title Profile
      v-list-group
        v-list-tile(slot="activator")
          v-list-tile-action
            v-icon mdi-database
          v-list-tile-content
            v-list-tile-title Categories
        v-list-tile(@click="")
          v-list-tile-content
            v-list-tile-title All Questions
        v-list-tile(@click="")
          v-list-tile-content
            v-list-tile-title Answered by you
      v-list-tile(v-for="items in DrawerItems" @click="" :key="items.title")
        v-list-tile-action
          v-icon {{items.icon}}
        v-list-tile-content
          v-list-tile-title {{items.title}}
</template>

<script>
export default {
  name: "Toolbar",
  props: { title: { type: String } },
  data: () => ({
    drawer: null,
    AccountItems: [{ title: "Profile" }, { title: "Logout" }],
    DrawerItems: [
      { title: "Home", icon: "mdi-home" },
      { title: "Help", icon: "mdi-help" },
      { title: "About", icon: "mdi-information" }
    ]
  })
};
</script>

<style scoped></style>
