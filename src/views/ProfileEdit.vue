<template lang="pug">
  v-container(fluid v-if="!$apollo.queries.viewer.loading").my-5
    v-row.justify-center
      v-col(cols="7")
        ProfileCard(
          :name="viewer.firstName.concat(' ',viewer.lastName)"
          :rollNumber="userProfile.roll"
          :avatarLink="userProfile.avatar.sizes.length?userProfile.avatar.sizes.find(e => e.name === 'full_size').url:require('@/assets/avatar_default.png')"
          :coverLink="userProfile.cover.sizes.length?userProfile.cover.sizes.find(e => e.name === 'full_size').url:require('@/assets/cover2.svg')")
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
              v-if="skills.length"
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
  computed: {
    userProfile() {
      /* eslint-disable */
      this.phone = this.viewer.userprofile.phone;
      this.hometown = this.viewer.userprofile.hometown;
      this.about = this.viewer.userprofile.about;
      this.select = this.yearItems.find(e => e.text === this.viewer.userprofile.year);
      if (this.viewer.userprofile.skills) {
        this.skills = this.viewer.userprofile.skills.split(",");
      }
      /* eslint-enable */

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
