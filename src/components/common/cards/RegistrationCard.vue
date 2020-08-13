<template lang="pug">
  v-card
    v-card-title.pt-0.pl-3.pr-3
      v-row.pa-4.primary.white--text Register User Profile
    v-card-text
      v-form( ref="form" v-model="validForm")
        v-row.pa-2
          v-col(cols="12" md="4").pb-0
            v-text-field(label="Phone"
              type="tel"
              v-model="phone"
              outlined prepend-icon="mdi-phone"
              :counter="10"
              :rules="phoneRules")
          v-col(cols="12" md="4").pb-0
            v-select(
              label="Gender*"
              :items="genderItems"
              item-text="text"
              item-value="key"
              outlined
              :rules="requiredRule"
              transition="slide-y-transition"
              :menu-props="{ offsetY: true }"
              return-object
              v-model="selectGender"
              prepend-icon="mdi-gender-female"
            )
          v-col(cols="12" md="4").pb-0
            v-menu(v-model="menuDate"
              :close-on-content-click="false"
              :nudge-right="40"
              lazy
              transition="scale-transition"
              offset-y
              full-width)
              template(v-slot:activator="{on}")
                v-text-field(label="Date Of Birth*"
                  prepend-icon="mdi-calendar"
                  :rules="requiredRule"
                  hint="2001-09-27"
                  :value="dob" v-on="on")
              v-date-picker(
                show-current
                no-title
                v-model="dob")
        v-row.pr-2
          v-col(cols="12" md="6").pb-0
            v-select(
              label="Programme*"
              :items="progItems"
              item-text="text"
              item-value="key"
              outlined
              :rules="requiredRule"
              transition="slide-y-transition"
              :menu-props="{ offsetY: true }"
              return-object
              v-model="selectProg"
              prepend-icon="mdi-certificate"
            ).ml-4
          v-col(cols="12" md="6").pb-0
            v-select(
              label="Branch*"
              :items="branchItems"
              item-text="text"
              item-value="key"
              outlined
              :rules="requiredRule"
              transition="slide-y-transition"
              :menu-props="{ offsetY: true }"
              return-object
              v-model="selectBranch"
              prepend-icon="mdi-school"
            ).ml-4
        v-row.pr-2
          v-col(cols="12" md="6").pb-0
            v-select(
              label="Year"
              :items="yearItems"
              item-text="text"
              item-value="key"
              outlined
              :rules="requiredRule"
              transition="slide-y-transition"
              :menu-props="{ offsetY: true }"
              return-object
              v-model="selectYear"
              prepend-icon="mdi-school"
            ).ml-4
          v-col(cols="12" md="6").pb-0
            v-text-field(outlined label="Roll No*"
              prepend-icon="mdi-account-card-details"
              v-model="roll"
              :rules="requiredRule"
            ).ml-4
    v-card-actions.justify-end.mr-8.mb-8
      v-btn.pa-5.accent(@click="createUserProfile" :disabled="!validForm") Register
</template>

<script>
import { CREATE_PROFILE_MUTATION } from "@/graphql/mutations/createProfileMutation";

export default {
  name: "RegistrationCard",
  data: () => ({
    validForm: false,
    selectGender: null,
    selectProg: null,
    selectBranch: null,
    selectYear: null,
    menuDate: null,
    dob: null,
    roll: null,
    requiredRule: [v => !!v || "This field is required"],
    phoneRules: [
      v => !!v || "Phone is required",
      v => (v && v.length === 10) || "Phone must be 10 characters"
    ],
    yearItems: [
      { key: "1", text: "First Year" },
      { key: "2", text: "Second Year" },
      { key: "3", text: "Third Year" },
      { key: "4", text: "Fourth Year" },
      { key: "5", text: "Fifth Year" }
    ],
    progItems: [
      { key: "BT", text: "B.Tech" },
      { key: "MT", text: "M.Tech" },
      { key: "MSc", text: "M.Sc" },
      { key: "PhD", text: "PhD" }
    ],
    branchItems: [
      { key: "CSE", text: "Computer Science and Engineering" },
      { key: "EE", text: "Electrical Engineering" },
      { key: "ME", text: "Mechanical Engineering" },
      { key: "CH", text: "Chemistry" },
      { key: "MA", text: "Mathematics" },
      { key: "PHY", text: "Physics" },
      { key: "MME", text: "Metallurgical and Materials Engineering" },
      { key: "HSS", text: "Humanities and Social Sciences" },
      { key: "BBE", text: "Biosciences and Bioengineering" },
      { key: "BISS", text: "BISS" },
      { key: "SS", text: "SS" }
    ],
    genderItems: [
      { key: "M", text: "Male" },
      { key: "F", text: "Female" },
      { key: "T", text: "Other" }
    ],
    phone: null
  }),
  methods: {
    createUserProfile() {
      this.$apollo
        .mutate({
          // Query
          mutation: CREATE_PROFILE_MUTATION,
          // Parameters
          variables: {
            input: {
              gender: this.selectGender.key,
              roll: this.roll,
              dob: this.dob,
              prog: this.selectProg.key,
              year: this.selectYear.key,
              phone: this.phone,
              branch: this.selectBranch.key
            }
          },
          client: "private"
        })
        .then(() => {
          this.$router.push({ name: "profile" });
        });
    }
  }
};
</script>

<style scoped></style>
