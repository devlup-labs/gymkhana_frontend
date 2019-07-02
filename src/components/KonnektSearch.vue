<template>
  <div class="container">
    <div>
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
    </div>
    <hr />

    <div class="card" v-for="person in filteredList" v-bind:key="person.name">
      <v-container class="container-fluid ">
        <v-layout row wrap flex-center mb-2>
          <v-flex md2>
            <img
              class="rounded-circle elevation-5"
              v-bind:src="person.img"
              alt="profile image"
            />
          </v-flex>
          <v-flex>
            <h2
              class=" text-md-center media-heading mb-1 v-responsive__sizer align-center justify-center"
            >
              {{ person.name }}
            </h2>
            <h4
              class="d-flex d-inline-flex chip wrap elevation-6 blue--text"
              v-for="skill in person.skills"
              v-bind:key="skill.name"
            >
              {{ skill }}
            </h4>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
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
h2 {
  font-family: "Roboto", sans-serif;
}
.chip {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 16px;
  background-color: #eceff1;
  margin-bottom: 1rem;
  margin-right: 1rem;
}
.rounded-circle {
  border-radius: 50%;
  max-height: 140px;
}
</style>
