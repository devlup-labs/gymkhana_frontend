<template lang="pug">
    v-container(fluid).ma-5
      v-layout(row).justify-center
        v-flex.md7
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
      v-layout(row).justify-center.text-center.mt-5
        v-icon(size="30") mdi-pencil
        h1.font-weight-regular Update Details:
      v-divider.mt-5.mb-5(inset).grey.ml-4
      v-layout(row).justify-center
        v-flex.md6
          v-form
            v-text-field(label="Phone" type="mobile" rounded filled prepend-icon="mdi-phone" :counter="10")
            v-text-field(label="Hometown" type="Address" rounded filled prepend-icon="mdi-map-marker" )
            v-select(:items="yearItems" prepend-icon="mdi-calendar")
            v-chip.elevation-2.font-weight-bold.ma-1(
              xs2
              color="light-blue darken-1 white--text"
              v-for="(skill,i) in personSkills"
              v-bind:key="i"
            ) {{ skill }}
              v-btn(icon dark v-on:click="del(skill)" )
                v-icon(small) mdi-window-close
            v-text-field(label="Enter A skill" v-model="newSkill" v-on:keyup.enter="add(newSkill)")
            v-textarea(label="About You" :counter="160" filled rounded)
      v-layout(row).justify-center
        v-btn(color="primary") Save
        v-btn.ml-4 Cancel
</template>

<script>
export default {
  name: "ProfileEdit",
  data: () => ({
    select: null,
    newSkill: null,
    yearItems: [
      "First Year",
      "Second Year",
      "Third Year",
      "Fourth Year",
      "Fifth Year"
    ],
    personSkills: ["css", "vue"]
  }),
  methods: {
    add: function(skill) {
      this.personSkills.push(skill);
      this.newSkill = "";
    },
    del: function(skill) {
      this.personSkills = this.personSkills.filter(e => e !== skill);
    }
  }
};
</script>

<style scoped></style>
