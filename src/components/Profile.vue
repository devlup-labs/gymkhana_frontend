<template lang="pug">
  v-flex
    v-parallax(
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      :height="350"
        )
      v-layout.justify-center.align-center.fill-height
        h1 About Me
    v-container.pa-4
      v-layout(row :style="{'margin-top': `-100px`}")
        v-flex.md8.offset-md2.sm8
          v-card(:height="300").elevation-4
            v-img(src="https://students.iitj.ac.in/static/assets/others/cover2.svg" :height="150")
            v-layout(column).justify-center.text-center
              v-flex
                v-avatar.elevation-4.justify-center.ma-2(:size="150" :style="{'margin-top': `-${150/2}px !important`}")
                  v-img.justify-center(src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png")
              v-flex
                h2(class="black--text").font-weight-bold.mt-0 Soham Sonawane
              v-flex
                p.font-weight-regular.mb-1 B18CSE053
      v-layout.pt-4(row)
        v-flex.md4.offset-md2.sm4
          v-card.elevation-4
            v-layout(column).ml-4
              v-flex
                v-list
                  v-list-item
                    v-list-item-title.headline Personal Info
              v-divider.mr-2
              v-list(disabled )
                v-list-item
                  v-list-item-icon
                    v-icon(size="25") mdi-gender-male-female
                  v-list-item-title.sub-title-1 Male
                v-list-item
                  v-list-item-icon
                    v-icon(size="25") mdi-phone
                  v-list-item-title.sub-title-1 6377954885
                v-list-item
                  v-list-item-icon
                    v-icon(size="25") mdi-email
                  v-list-item-title.sub-title-1 sonawane.1@iitj.ac.in
                v-list-item
                  v-list-item-icon
                    v-icon(size="25") mdi-map-marker
                  v-list-item-title.sub-title-1 None
        v-flex.md4.pl-2.sm4
          v-card.elevation-4
            v-layout(column).ml-4
              v-flex
                v-list
                  v-list-item
                    v-list-item-title.headline Personal Info 2
              v-divider.mr-2
              v-list(disabled )
                v-list-item
                  v-list-item-icon
                    v-icon(size="25") mdi-cake
                  v-list-item-title.sub-title-1 Sept. 7, 2001
                v-list-item
                  v-list-item-icon
                    v-icon(size="25") mdi-account-card-details
                  v-list-item-title.sub-title-1 B.Tech
                v-list-item
                  v-list-item-icon
                    v-icon(size="25") mdi-school
                  v-list-item-title.sub-title-1 Computer Science and Engineering
                v-list-item
                  v-list-item-icon
                    v-icon(size="25") mdi-calendar
                  v-list-item-title.sub-title-1 Second Year
      v-layout.pt-4(row)
        v-flex.md4.offset-md2.sm4
          v-card.elevation-4
            v-layout(column).ml-4
              v-flex
                v-list
                  v-list-item
                    v-list-item-title.headline Skills
              v-divider.mr-2
              v-layout(row).pa-4
                v-chip.elevation-2.font-weight-bold.ma-1(
                  xs2
                  color="light-blue darken-1 white--text"
                  v-for="(skill,i) in profileSkills"
                  v-bind:key="i"
                ) {{ skill }}
        v-flex.md4.pl-2.sm4
          v-card.elevation-4
            v-layout(column).ml-4
              v-flex
                v-list
                  v-list-item
                    v-list-item-title.headline About
              v-divider.mr-2
              v-layout(row).justify-center.mt-2
                p.title.font-weight-regular NONE
      v-layout.pt-4(row).mb-5
        v-flex.md4.offset-md2.sm4
          v-card.elevation-4
            v-layout(column).ml-4
              v-flex
                v-list
                  v-list-item
                    v-list-item-title.headline Social Links
                    v-list-item-action
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
              v-divider.mr-2
              v-list()
                v-list-item(v-for="(link,i) in socialLinks" )
                  v-list-item-icon
                    v-icon(size="25") {{link.icon}}
                  v-list-item-title.sub-title-1
                    a(:href="link.add") {{link.add}}
    v-tooltip(left color="black")
      template(v-slot:activator="{ on }")
        v-btn.ma-5(
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
export default {
  name: "Profile",
  data: () => ({
    profileSkills: [
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
      { icon: "mdi-github-circle", add: "https://www.github.com/killbotXD" },
      { icon: "mdi-google", add: "https://www.gmail.com" }
    ]
  })
};
</script>

<style scoped />
