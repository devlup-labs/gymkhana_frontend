<template lang="pug">
  v-flex
    v-parallax(
      dark
      :src="require('../assets/home2.jpg')"
      :height="350"
    )
      v-layout.justify-center.align-center.fill-height
        h1 Photography Club
    v-container.pa-4
      v-layout(row :style="{'margin-top': `-100px`}").justify-center
        v-flex.md8.offset-md2.sm8
          v-card.card-border( class="border-top--green").pa-5.elevation-8
            v-card-title.display-1.font-weight-light About
            v-card-text
              p The Photography club envisages a vision comprising an outburst of every possible activity and in whatever domain one wants to do. Proposals are abundant, ambitions are high. Pioneering photography, event coverage, time-lapse photography etc. tops the list of our activities and plans. The club provides the students tremendous opportunities to live up this beautiful hobby or to pursue interest in it.
              p Currently club is having 3 entry-level and 2 semi-pro DSLRs namely :800D, 550D, 650D, 80D and 77D.
            v-card-actions.justify-end
              |link to resources
              v-btn.ml-2(right ripple class="accent")
                v-icon mdi-arrow-right
    v-container
      v-layout(row)
        v-flex.md4
          v-card(flat tile text)
            v-card-title.headline.justify-center
              v-icon(left large) mdi-lightbulb-outline
              | Upcoming Event
            v-card-text
              EventTable
        v-flex.md7.offset-md1.elevation-0(flat tile depressed)
          v-tabs(fixed-tabs background-color='primary ' dark v-model="tab")
            v-tab
              | Activities
            v-tab
              v-icon(left) mdi-newspaper
              |news
          v-tabs-items(v-model="tab")
            v-tab-item
              v-expansion-panels(accordion focusable)
                v-expansion-panel(v-for='i in 5' :key='i')
                  v-expansion-panel-header Activity {{i+1}}
                  v-expansion-panel-content.mt-2
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            v-tab-item
              v-card(flat tile text).pa-4
                v-card-text
                  NewsTable

    v-container.pa-9.pb-0
      v-flex.md10.offset-md1
        v-card(class="accent white--text").elevation-10
          v-card-title.justify-center.display-1 Key People
        v-layout(row)
          v-flex.md4(v-for="(person,i) in keyPeople" :key="i")
            v-layout(column).align-center.mt-8.title
              v-flex
                v-avatar.elevation-4.ma-2(size="180")
                  v-img(src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png")
              v-flex.mt-4.font-weight-medium
                | {{person.name}}
              v-flex(class="blue--text").mt-2.font-weight-light
                v-icon( left) mdi-phone
                | {{person.number}}
              v-flex.mt-2.font-weight-light
                | {{person.position}}
              v-flex.mt-2.font-weight-regular.subtitle-1.text-center
                | {{person.desc}}
              v-flex.pa-4
                v-layout(row)
                  v-btn(icon v-for="(slink,n) in person.socialLinks" :key="n" :href="slink.link")
                    v-icon.pa-2 {{slink.icon}}

    v-container.pa-9.pb-0
      v-flex.md10.offset-md1
        v-card(class="accent white--text").elevation-10
          v-card-title.justify-center.display-1 Achievements
        v-container.pa-12.pb-5
          ol
            li Artwork of three of our members, Mohit Gupta, Kirti Vardhan Rathore and Himanshu Sahu was showcased at the Lorien Gallery, Denmark.
            li Karthik Mohan : Photographer of the Day for the theme "Art in your Heart" in the fest Pantheon – 2016 of College of engineering, Trivandrum, India.
            li Mohit Gupta : 3rd Prize Alcheringa, IIT Guwahati (2013).

    v-container.pa-12
      v-flex.md10.offset-md1
        v-card(class="accent white--text").elevation-10
          v-card-title.justify-center.display-1 Volunteers
        v-layout(row).mt-10
          v-flex.md6(v-for="(volunteer,j) in volunteers" :key="j")
            v-layout(row).justify-center.ma-2
              v-flex.md6
                v-card.elevation-6
                  v-img(:src="volunteer.img" max-height="200")
              v-flex.md6
                v-layout(column).align-center.ma-4
                  v-flex.mt-4 {{volunteer.name}}
                  v-flex.mt-4 {{volunteer.desc}}
                  v-flex.pa-4
                    v-layout(row)
                      v-btn(icon v-for="(sl,l) in volunteer.socialLinks" :key="l" :href="sl.link")
                        v-icon.pa-2 {{sl.icon}}

    Footer

</template>
<script>
import EventTable from "../components/common/EventTable";
import NewsTable from "../components/common/NewsTable";
import Footer from "../components/common/Footer";
export default {
  name: "Club",
  components: { Footer, NewsTable, EventTable },
  data: () => ({
    tab: null,
    keyPeople: [
      {
        name: "Rituraj Kulshresth",
        number: "91231XXXXX",
        position: "Vice Captain",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt libero nobis perferendis! Quis?",
        socialLinks: [
          { link: "kulshresth.1@iitj.ac.in", icon: "mdi-email" },
          {
            link: "https://www.instagram.com/riturajkulshresth",
            icon: "mdi-instagram"
          }
        ]
      },
      {
        name: "Anshul Tilondiya",
        number: "91231XXXXX",
        position: "Captain",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt libero nobis perferendis! Quis?",
        socialLinks: [
          { link: "tilondiya.1@iitj.ac.in", icon: "mdi-email" },
          {
            link: "https://www.instagram.com/anshul_tilondiya",
            icon: "mdi-instagram"
          }
        ]
      },
      {
        name: "Soham Sonawane",
        number: "91231XXXXX",
        position: "Vice Captain",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt libero nobis perferendis! Quis?",
        socialLinks: [
          { link: "sonawane.1@iitj.ac.in", icon: "mdi-email" },
          {
            link: "https://www.instagram.com/when_soham_clicks",
            icon: "mdi-instagram"
          },
          {
            link: "https://www.github.com/killbotXD",
            icon: "mdi-github-circle"
          }
        ]
      }
    ],
    volunteers: [
      {
        img:
          "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png",
        name: "Puru Raj",
        desc: " NONE ",
        socialLinks: [
          { link: "sonawane.1@iitj.ac.in", icon: "mdi-email" },
          {
            link: "https://www.instagram.com/when_soham_clicks",
            icon: "mdi-instagram"
          },
          {
            link: "https://www.github.com/killbotXD",
            icon: "mdi-github-circle"
          }
        ]
      },
      {
        img:
          "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png",
        name: "Om Solanki",
        desc: " NONE ",
        socialLinks: [
          { link: "sonawane.1@iitj.ac.in", icon: "mdi-email" },
          {
            link: "https://www.instagram.com/when_soham_clicks",
            icon: "mdi-instagram"
          },
          {
            link: "https://www.github.com/killbotXD",
            icon: "mdi-github-circle"
          }
        ]
      }
    ]
  })
};
</script>

<style scoped>
.card-border {
  border-top: 8px solid #4791db;
}
</style>
