<template lang="pug">
  v-container(fluid).my-5
    v-row.justify-center
      v-col(cols="7")
        ProfileCard(name="Soham Sonawane" rollNumber="B18CSE053")
    v-row.justify-center.align-center
      v-btn(x-large text disabled).text--black
        v-icon(left) mdi-pencil
        | Update Details
    v-divider.ma-5.grey
    v-row.justify-center
      v-col(sm="8" md="6")
        v-form
          v-text-field(label="Phone" type="tel" outlined prepend-icon="mdi-phone" :counter="10")
          v-text-field(label="Hometown" type="Address" outlined prepend-icon="mdi-map-marker" )
          v-select(
            label="Year"
            :items="yearItems"
            outlined
            prepend-icon="mdi-calendar"
          )
          v-textarea(label="About You" :counter="160" outlined)
          v-col.pb-0
            p.mb-0.font-weight-light Skills
            v-chip.elevation-2.font-weight-bold.ma-1(
              xs2
              color="light-blue darken-1 white--text"
              v-for="(skill, i) in skills"
              :key="i"
              close
              @click:close="del(skill)"
            ) {{ skill }}
          v-text-field.mb-3.mt-0.pt-0(
            hint="Enter A skill"
            persistent-hint
            @keyup.enter="e => add(e)"
          )
    v-layout(row).justify-center
      v-btn(color="primary") Save
      v-btn.ml-4 Cancel
</template>

<script>
import ProfileCard from "./ProfileCard";
export default {
  name: "ProfileEdit",
  components: { ProfileCard },
  data: () => ({
    select: null,
    yearItems: ["First", "Second", "Third", "Fourth", "Fifth"],
    skills: ["css", "vue"]
  }),
  methods: {
    add: function(event) {
      this.skills.push(event.target.value);
      event.target.value = "";
    },
    del: function(skill) {
      this.skills = this.skills.filter(e => e !== skill);
    }
  }
};
</script>

<style scoped>
.v-btn.v-btn--disabled,
.v-btn.v-btn--disabled .v-icon {
  color: unset !important;
}
</style>
