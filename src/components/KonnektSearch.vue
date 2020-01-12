<template lang="pug">
<<<<<<< HEAD
  v-container
    v-responsive(min-width="40px")
      v-layout(row fill-height)
        v-flex(lg6 xs6 offset-xs3)
          v-text-field(
            v-model="search"
            outline
            prepend-inner-icon="mdi-magnify"
            label="search any skill or name"
            clearable)
        v-flex
          v-btn(large color="primary" :to="{name : 'konnekt-search'}") GO
    v-container.ms-5
      div(v-for="(node,i) in search.edges" :key="i")
        v-container.container
          v-layout.card( row wrap flex-center)
            v-flex(xs3 lg2 md2 pa-3 layout justify-center)
              v-avatar.elevation-4(size="100" :tile="false")
                v-img(:src="require(node.node.avatar)" alt="Image")
            v-flex(
              text-lg-center
              text-md-center
              text-xs-center
              align-center
              fill-height
              xs6
              lg1
              md1
              mt-5
              :class="{ 'pt-4 ms-4': $vuetify.breakpoint.smAndDown, 'pt-0': $vuetify.breakpoint.mdAndUp }"
            )
              h2.mb-3.font-weight-light {{ node.node.user.firstName }} {{ node.node.user.lastName }}
            v-flex(
              text-xs-center
              text-md-center
              xs12
              lg8
              md8
              :class="{ 'pt-3 mt-0': $vuetify.breakpoint.smAndDown, 'pt-1 mt-4': $vuetify.breakpoint.mdAndUp }"
            )
              v-chip.elevation-2.font-weight-bold.ma-1(
                xs2
                color="light-blue darken-1 white--text"
                v-for="(skill,i) in node.node.skills.split(',')"
                v-bind:key="i"
              ) {{ skill }}
</template>

<script>
import gql from "graphql-tag";
class Person {
  constructor(name, skills, img) {
    this.name = name;
    this.skills = skills;
    this.img = img;
  }
}

export default {
  apollo: {
    viewer: gql`
      {
        viewer {
          firstName
        }
      }
    `,
    search: gql`
      {
        search(query: "css", nodeType: USER_PROFILE) {
          edges {
            node {
              ... on UserProfileNode {
                user {
                  firstName
                  lastName
                }
                skills
                avatar
              }
            }
          }
        }
      }
    `
  },
  name: "KonnektSearch",
  data: function() {
    return {
      viewer: {},
      search: {},
      search_1: "",
      personList: [
        new Person(
          "Soham",
          ["cpp", "vue"],
          "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png"
        ),
        new Person(
          "Kunal",
          ["node.js", "java"],
          "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png"
        ),
        new Person(
          "Manvendra",
          ["html", "CSS", "Java"],
          "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png"
        ),
        new Person(
          "Sanskar",
          ["java", "C", "C++"],
          "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png"
        ),
        new Person(
          "Manav",
          ["python"],
          "https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png"
        )
      ]
    };
  }
};
</script>

<style scoped />
