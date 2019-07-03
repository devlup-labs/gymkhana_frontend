<template>
  <div class="container">
    <v-container>
      <v-responsive min-width="40px"
        ><v-layout row fill-height>
          <v-flex lg6 offset-xs3
            ><v-text-field
              v-model="search"
              outline
              prepend-inner-icon="mdi-magnify"
              label="search any skill or name"
              clearable
            ></v-text-field
          ></v-flex>
          <v-flex><v-btn color="primary">GO</v-btn></v-flex>
        </v-layout>
      </v-responsive>
    </v-container>
    <hr />
    <v-container class="v-responsive__content v-responsive__sizer">
      <v-card
        v-for="person in filteredList"
        hover
        raised
        ripple
        v-bind:key="person.name"
      >
        <v-container class="container">
          <v-layout row wrap flex-center class="card">
            <v-flex xs3 lg2 md2 pa-3>
              <v-img
                lazy-src="white"
                transition=""
                contain
                class="rounded-circle elevation-5 "
                v-bind:src="person.img"
                alt="profile image"
              />
            </v-flex>
            <v-flex xs9 lg10 md10 mt-4 class="text-md-center">
              <h2 class="media-heading mb-3 v-responsive__sizer justify-center">
                {{ person.name }}
              </h2>
              <v-chip
                color="light-blue darken-1 white--text"
                class="elevation-2  font-weight-bold"
                v-for="skill in person.skills"
                v-bind:key="skill.name"
              >
                {{ skill }}
              </v-chip>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
class Person {
  constructor(name, skills, img) {
    this.name = name;
    this.skills = skills;
    this.img = img;
  }
}
export default {
  name: "KonnektSearch",
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

<style scoped>
.rounded-circle {
  border-radius: 50%;
}
</style>
