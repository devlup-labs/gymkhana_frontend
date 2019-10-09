<template lang="pug">
  div
    v-stepper(v-model="cardPage")
      v-stepper-items
        v-stepper-content(step="1")
          v-toolbar(flat)
            v-toolbar-title
              v-img(src="../assets/logo.png")
          v-card-text.justify-center.text-md-center.text-xs-center.text-lg-center
            v-avatar(src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png")
            p.font-weight-medium Anugrah Shukla
            p.font-weight-regular General Seceretary
            v-btn(@click="cardPage = 2") Details
        v-stepper-content(step="2")
          v-card-text.justify-center.text-md-center.text-xs-center.text-lg-center
            p.font-weight-medium  About Anugrah
            v-divider(inset)
            div
              a(href="https://api.whatsapp.com/send?phone=919610942435")
              a(href="https://students.iitj.ac.in/office-bearers/tel:9610942435") +91-9610942435
            div
              v-icon(src="mdi-email")
              p kumar.14@iitj.ac.in
            v-divider(inset)
            v-btn.fill-height(@click="cardPage = 1") Back


</template>

<script>
export default {
  name: "OfficeBearerCard",
  data() {
    return {
      cardPage: 0
    };
  }
};
</script>

<style scoped></style>
