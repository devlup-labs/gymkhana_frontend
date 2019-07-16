<template lang="pug">
  div.container
    v-container
      v-responsive(min-width="40px")
        v-layout(row fill-height)
          v-flex(lg6 offset-xs3)
            v-text-field(
              v-model="search"
              outline
              prepend-inner-icon="mdi-magnify"
              label="search any skill or name"
              clearable)
          v-flex
            v-btn(large color="primary") GO
    v-container(v-responsive__sizer v-responsive__content)
      div(v-for="person in filteredList" v-bind:key="person.name")
        v-container.container
          v-layout.card( row wrap flex-center)
            v-flex(xs3 lg2 md2 pa-3 layout justify-center)
              v-avatar.elevation-4(size="100" :tile="false")
                v-img(v-bind:src="person.img" alt="profile image")
            v-flex(
              text-lg-center
              text-md-center
              text-xs-center
              align-center
              fill-height
              xs4
              lg1
              md1
              :class="{ 'pt-4 mt-0': $vuetify.breakpoint.smAndDown, 'pt-0 mt-4': $vuetify.breakpoint.mdAndUp }"
            )
              h2.mb-3.font-weight-light {{ person.name }}
            v-flex(
              text-xs-center
              text-md-center
              xs5
              lg8
              md8
              :class="{ 'pt-3 mt-0': $vuetify.breakpoint.smAndDown, 'pt-1 mt-4': $vuetify.breakpoint.mdAndUp }"
            )
              v-chip.elevation-2.font-weight-bold(
                xs2
                color="light-blue darken-1 white--text"
                v-for="skill in person.skills"
                v-bind:key="skill.name"
              ) {{ skill }}
</template>

<script>
import Toolbar from "./Toolbar";

class Person {
  constructor(name, skills, img) {
    this.name = name;
    this.skills = skills;
    this.img = img;
  }
}
export default {
  name: "KonnektSearch",
  components: { Toolbar },
  data: function() {
    return {
      search: "",
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
  },
  computed: {
    filteredList() {
      return this.personList.filter(person => {
        return person.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped></style>
