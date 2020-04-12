<template lang="pug">
  v-container(fluid).pt-0
    v-row.text-capitalize.justify-center.align-center.fill-height(class="blue white--text").display-2.pa-8
      |Topic
    v-container
      v-row.mt-3
        v-avatar(size="100")
          v-img(src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST4n1T70ibu7ov-7FT63MjRA-yPrjrfHem04kPtqOVWjBNQuQK")
        v-col.pl-4
          v-row
            p Soham Sonawane
            p.ml-2.font-weight-light April 8, 2020, 2:23 a.m.
            v-row.justify-end.mr-8.align-center
              UpvoteButton.justify-end.mr-4
              v-btn(icon @click="toggleDialog")
                v-icon mdi-reply
          span Description
          v-row
            v-chip.elevation-2.font-weight-bold.ma-1(
              xs2
            color="light-blue darken-1 white--text"
            v-for="i in 3"
            :key="i"
          ) tags
      v-divider.mt-5
      v-timeline(align-top dense)
        ForumAnswerComponent(v-for="t in 4" :key="t")
      v-dialog(v-model="dialog" persistent max-width="700px" )
        AddAnswerDialog
          template(v-slot:cross)
            v-btn(icon @click="toggleDialog")
              v-icon mdi-close
          template(v-slot:answer)
            v-btn(@click="toggleDialog" color="primary") Answer
</template>

<script>
import ForumAnswerComponent from "./ForumAnswerComponent";
import UpvoteButton from "../common/buttons/UpvoteButton";
import AddAnswerDialog from "./AddAnswerDialog";
export default {
  name: "ForumTopic",
  components: { AddAnswerDialog, UpvoteButton, ForumAnswerComponent },
  data: () => ({
    dialog: false
  }),
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog;
    }
  }
};
</script>

<style scoped></style>
