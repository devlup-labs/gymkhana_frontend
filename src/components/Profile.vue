<template lang="pug">
  v-flex
    v-parallax(
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      :height="$vuetify.theme.options.parallaxHeight"
    )
      v-layout.justify-center.align-center.fill-height
        h1 About Me
    v-container.pa-4
      v-row(justify="center" :style="{'margin-top': `-${$vuetify.theme.options.parallaxHeight/3}px`}")
        v-col(cols="12" sm="10" lg="8")
          ProfileCard(:name="profile.name" :rollNumber="profile.rollNumber")
      v-row(justify="center")
        v-col(cols="12" sm="5" lg="4")
          v-card(elevation="4")
            v-card-title.headline Personal Info
            v-divider.mx-2
            v-card-text
              v-list(disabled)
                v-list-item(v-for="(key, i) in Object.keys(profile.info.personal)" :key="i")
                  v-list-item-icon
                    v-icon(size="25") {{ iconMap[key] }}
                  v-list-item-title.sub-title-1 {{ profile.info.personal[key] }}
        v-col(cols="12" sm="5" lg="4")
          v-card(elevation="4")
            v-card-title.headline Branch, DoB and more
            v-divider.mx-2
            v-card-text
              v-list(disabled)
                v-list-item(v-for="(key, i) in Object.keys(profile.info.other)" :key="i")
                  v-list-item-icon
                    v-icon(size="25") {{ iconMap[key] }}
                  v-list-item-title.sub-title-1 {{ profile.info.other[key] }}
      v-row(justify="center")
        v-col(cols="12" sm="5" lg="4")
          v-card(elevation="4")
            v-card-title.headline Skills
            v-divider.mx-2
            v-card-text
              v-chip.elevation-2.font-weight-bold.ma-1(
                xs2
                color="light-blue darken-1 white--text"
                v-for="(skill, i) in skills"
                v-bind:key="i"
              ) {{ skill }}
        v-col(cols="12" sm="5" lg="4")
          v-card(elevation="4")
            v-card-title.headline About
            v-divider.mx-2
            v-card-text.text-center
              p.title.font-weight-regular NONE
      v-row
        v-col(sm="5" offset-sm="1" lg="4" offset-lg="2")
          v-card(elevation="4")
            v-card-title.headline Social Links
              v-spacer
              v-tooltip(left color="black" )
                template(v-slot:activator="{ on }")
                  v-btn(
                    color="accent darken-2"
                    v-on="on"
                    dark
                    icon
                  )
                    v-icon(size="30") mdi-plus
                span Add Social Link
            v-divider.mx-2
            v-card-text
              v-col.text-center.px-0
                v-btn.ma-1(
                  v-for="(link, i) in socialLinks"
                  :key="i"
                  color="secondary"
                  rounded
                  :href="link.url"
                  target="blank"
                )
                  v-icon(left) {{ $vuetify.theme.options.socialMediaIconMap[link.socialMedia].icon }}
                  | {{ $vuetify.theme.options.socialMediaIconMap[link.socialMedia].name }}
    v-tooltip(left color="black")
      template(v-slot:activator="{ on }")
        v-btn.ma-5(
          :to="{name: 'profile-edit'}"
          color="primary"
          v-on="on"
          dark
          fixed
          bottom
          right
          fab)
          v-icon mdi-pencil
      span Edit Your profile
</template>

<script>
import ProfileCard from "./ProfileCard";
import { VIEWER_PROFILE_QUERY } from "../graphql/queries/viewerProfileQuery";
export default {
  apollo: {
    viewer: {
      query: VIEWER_PROFILE_QUERY
    },
    $client: "private"
  },
  name: "Profile",
  components: { ProfileCard },
  data: () => ({
    profile: {
      name: "Soham Sonawane",
      rollNumber: "B18CSE053",
      info: {
        personal: {
          gender: "Male",
          phone: "6377954885",
          email: "sonawane.1@iitj.ac.in",
          hometown: "Pune"
        },
        other: {
          dob: "Sept. 7, 2001",
          prog: "B.Tech",
          branch: "Computer Science and Engineering",
          year: "Second Year"
        }
      }
    },
    skills: [
      "cpp",
      "vue",
      "c++",
      "kotlin",
      "java",
      "vuetify",
      "photography",
      "latex",
      "django"
    ],
    socialLinks: [
      { socialMedia: "GH", url: "https://www.github.com/killbotXD" },
      { socialMedia: "GP", url: "https://www.gmail.com" }
    ]
  }),
  computed: {
    iconMap: () => ({
      dob: "mdi-cake",
      prog: "mdi-account-card-details",
      branch: "mdi-school",
      year: "mdi-calendar",
      gender: "mdi-gender-male-female",
      phone: "mdi-phone",
      email: "mdi-email",
      hometown: "mdi-map-marker"
    })
  }
};
</script>

<style scoped />
