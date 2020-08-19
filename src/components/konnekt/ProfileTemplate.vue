<template lang="pug">
  v-flex
    v-parallax(
      dark
      :src="require('@/assets/banner.jpg')"
      :height="$vuetify.theme.options.parallaxHeight"
    )
      v-layout.justify-center.align-center.fill-height
        h1 About {{user.firstName.concat(' ',user.lastName)}}
    v-container.pa-4
      v-row(
        justify="center"
        :style="{'margin-top': `-${$vuetify.theme.options.parallaxHeight/3}px`}")
        v-col(cols="12" sm="10" lg="8")
          ProfileCard(
            :name="user.firstName.concat(' ',user.lastName)"
            :rollNumber="profile.roll"
            :avatarLink="profile.avatar.sizes.length?profile.avatar.sizes.find(e => e.name === 'full_size').url:require('@/assets/avatar_default.png')"
            :coverLink="profile.cover.sizes.length?profile.cover.sizes.find(e => e.name === 'full_size').url:require('@/assets/cover2.svg')")
      v-row(justify="center")
        v-col(cols="12" sm="5" lg="4")
          v-card(elevation="4")
            v-card-title.headline Personal Info
            v-divider.mx-2
            v-card-text
              v-list(disabled)
                v-list-item(v-for="(key, i) in Object.keys(iconMap.info)" :key="i")
                  v-list-item-icon
                    v-icon(size="25") {{ iconMap.info[key] }}
                  v-list-item-title(v-if="key === 'email'").sub-title-1 {{ user[key] }}
                  v-list-item-title(v-else).sub-title-1 {{ profile[key] }}
        v-col(cols="12" sm="5" lg="4")
          v-card(elevation="4")
            v-card-title.headline Branch, DoB and more
            v-divider.mx-2
            v-card-text
              v-list(disabled)
                v-list-item(v-for="(key, i) in Object.keys(iconMap.other)" :key="i")
                  v-list-item-icon
                    v-icon(size="25") {{ iconMap.other[key] }}
                  v-list-item-title(v-if="key === 'dob'").sub-title-1 {{ profile[key] | moment }}
                  v-list-item-title(v-else).sub-title-1 {{ profile[key] }}
      v-row(justify="center")
        v-col(cols="12" sm="5" lg="4")
          v-card(elevation="4")
            v-card-title.headline Skills
            v-divider.mx-2
            v-card-text(v-if="profile.skills")
              v-chip.elevation-2.font-weight-bold.ma-1(
                v-if="profile.skills.length"
                xs2
                color="light-blue darken-1 white--text"
                v-for="(skill, i) in profile.skills.split(',')"
                @click="searchChip(skill)"
                v-bind:key="i"
              ) {{ skill }}
        v-col(cols="12" sm="5" lg="4")
          v-card(elevation="4")
            v-card-title.headline About
            v-divider.mx-2
            v-card-text.text-center
              p.title.font-weight-regular {{profile.about}}
      v-row
        v-col(sm="5" offset-sm="1" lg="4" offset-lg="2")
          v-card(elevation="4")
            v-card-title.headline Social Links
              v-spacer
              slot(name="sLinkAdd")
            v-divider.mx-2
            v-card-text
              v-col.text-center.px-0
                v-btn.ma-1(
                  v-for="({node}, i) in profile.socialLinks.edges"
                  :key="i"
                  :color="$vuetify.theme.options.socialMediaIconMap[node.socialMedia].color"
                  rounded
                  :href="node.link"
                  target="blank"
                ).white--text
                  v-icon(left) {{ $vuetify.theme.options.socialMediaIconMap[node.socialMedia].icon }}
                  | {{ $vuetify.theme.options.socialMediaIconMap[node.socialMedia].name }}
    
</template>

<script>
import moment from "moment";
import ProfileCard from "../ProfileCard";

export default {
  name: "ProfileTemplate",
  components: { ProfileCard },
  props: {
    user: {}
  },
  computed: {
    iconMap: () => ({
      other: {
        dob: "mdi-cake",
        prog: "mdi-account-card-details",
        branch: "mdi-school",
        year: "mdi-calendar"
      },
      info: {
        gender: "mdi-gender-male-female",
        phone: "mdi-phone",
        email: "mdi-email",
        hometown: "mdi-map-marker"
      }
    }),
    profile() {
      return this.user.userprofile;
    }
  },
  filters: {
    moment: date => {
      return moment(date).format("MMM. DD, YYYY");
    }
  },
  methods: {
    searchChip(skill) {
      this.$router.push({
        name: "konnekt-search",
        query: { searchTerm: skill }
      });
    }
  }
};
</script>

<style scoped></style>
