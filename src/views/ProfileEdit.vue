<template lang="pug">
  v-container(fluid).my-5
    v-row.justify-center
      v-col(cols="7")
        ProfileCard(
          :name="viewer.firstName.concat(' ',viewer.lastName)"
          :rollNumber="profile1.roll"
          :avatarLink="profile1.avatar.sizes.length?profile1.avatar.sizes.find(e => e.name === 'full_size').url:require('@/assets/avatar_default.png')"
          :coverLink="profile1.cover.sizes.length?profile1.cover.sizes.find(e => e.name === 'full_size').url:'https://students.iitj.ac.in/static/assets/others/cover2.svg'")
    v-row.justify-center.align-center
      v-btn(x-large text disabled).text--black
        v-icon(left) mdi-pencil
        | Update Details
    v-divider.ma-5.grey
    v-row.justify-center
      v-col(sm="8" md="6")
        v-form
          v-text-field(label="Phone" type="tel" v-model="phone" outlined prepend-icon="mdi-phone" :counter="10")
          v-text-field(label="Hometown" type="Address" v-model="hometown" outlined prepend-icon="mdi-map-marker" )
          v-select(
            label="Year"
            :items="yearItems"
            item-text="text"
            item-value="key"
            outlined
            return-object
            v-model="select"
            prepend-icon="mdi-calendar"
          )
          v-textarea(label="About You" v-model="about" :counter="160" outlined)
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
      v-btn(color="primary" @click="updateUserProfile") Save
      v-btn.ml-4(@click="$router.go(-1)") Cancel
</template>

<script>
import ProfileCard from "../components/ProfileCard";
import { VIEWER_PROFILE_QUERY } from "../graphql/queries/viewerProfileQuery";
import { UPDATE_PROFILE_MUTATION } from "../graphql/mutations/updateProfileMutation";
export default {
  apollo: {
    viewer: {
      query: VIEWER_PROFILE_QUERY
    },
    $client: "private"
  },
  name: "ProfileEdit",
  components: { ProfileCard },
  data: () => ({
    select: null,
    yearItems: [
      { key: "1", text: "First Year" },
      { key: "2", text: "Second Year" },
      { key: "3", text: "Third Year" },
      { key: "4", text: "Fourth Year" },
      { key: "5", text: "Fifth Year" }
    ],
    skills: [],
    phone: null,
    hometown: null,
    about: null
  }),
  methods: {
    add: function(event) {
      this.skills.push(event.target.value);
      event.target.value = "";
    },
    del: function(skill) {
      this.skills = this.skills.filter(e => e !== skill);
    },
    onload() {
      this.phone = this.profile1.phone;
      this.hometown = this.profile1.hometown;
      this.about = this.profile1.about;
      this.select = this.yearItems.find(e => e.text === this.profile1.year);
      this.skills = this.profile1.skills.split(",");
    },
    updateUserProfile() {
      this.$apollo
        .mutate({
          // Query
          mutation: UPDATE_PROFILE_MUTATION,
          refetchQueries: [
            {
              query: VIEWER_PROFILE_QUERY
            }
          ],
          // Parameters
          variables: {
            input: {
              year: this.select.key,
              phone: this.phone,
              hometown: this.hometown,
              skills: this.skills.toString(),
              about: this.about
            }
          },
          client: "private"
        })
        .then(() => {
          this.$router.push({ name: "profile" });
        });
    }
  },
  mounted() {
    this.onload();
  },
  computed: {
    profile1() {
      return this.viewer.userprofile;
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
