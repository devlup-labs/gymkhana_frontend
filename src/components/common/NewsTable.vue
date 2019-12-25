<template lang="pug">
  v-simple-table.elevation-4
    thead(class="primary lighten-1 gray--text")
      th.pr-0
        v-icon mdi-pen
      th.subtitle-1.justify-start Title
      th.subtitle-1.text-center
        v-icon mdi-calendar
    tbody
      tr(v-for="(news,i) in newsList" :key="i" @click.stop="showDialog(news)")
        td
          v-icon mdi-chevron-right
        td {{ news.name}}
        td.text-center {{ news.date }}
    v-dialog.elevation-12( v-model="dialog"
      persistent
      max-width="500")
      v-card
        v-card-title(class="primary darken-1 white--text").justify-center
          v-spacer
          span.ml-4 {{singleEvent.name}}
          v-spacer
          v-btn(icon dark @click="dialog = false")
            v-icon(right) mdi-close-circle
        v-card-text
          v-container
            v-layout(row)
              v-flex.md12
                v-img(:src="singleEvent.img" alt="lawda" max-height="230" cover).elevation-10
              v-flex.md6.mt-4.offset-2
                v-icon(left) mdi-calendar
                | {{singleEvent.date}}
              v-flex.md4.mt-4
                v-icon(left) mdi-account
                | {{singleEvent.author}}
              v-flex.md12.mt-5
                p {{singleEvent.desc}}
        v-card-actions.justify-end
          v-btn(@click="dialog = false" class="primary darken-1 white--text" small) close

</template>

<script>
export default {
  name: "NewsTable",
  data: () => ({
    singleEvent: {
      name: "",
      date: "",
      author: "",
      desc: "",
      img: ""
    },
    newsList: [
      {
        name: "Event 1",
        date: "tomorrow",
        author: "IIT-J",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dignissimos, distinctio eaque esse, est et eveniet ipsam laboriosam nam neque nesciunt placeat porro quibusdam quidem quos repudiandae rerum similique.",
        img: require("../../assets/home1.jpg")
      },
      {
        name: "Event 2",
        date: "23/01/2011",
        author: "IIT-J",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dignissimos, distinctio eaque esse, est et eveniet ipsam laboriosam nam neque nesciunt placeat porro quibusdam quidem quos repudiandae rerum similique.",
        img: require("../../assets/home1.jpg")
      },
      {
        name: "Event 3",
        date: "tomorrow",
        author: "IIT-J",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dignissimos, distinctio eaque esse, est et eveniet ipsam laboriosam nam neque nesciunt placeat porro quibusdam quidem quos repudiandae rerum similique.",
        img: require("../../assets/home1.jpg")
      },
      {
        name: "Event 4",
        date: "tomorrow",
        author: "IIT-J",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dignissimos, distinctio eaque esse, est et eveniet ipsam laboriosam nam neque nesciunt placeat porro quibusdam quidem quos repudiandae rerum similique.",
        img: require("../../assets/home1.jpg")
      }
    ],
    dialog: false
  }),
  methods: {
    showDialog(event) {
      this.dialog = true;
      this.singleEvent = Object.assign({}, event);
    }
  }
};
</script>

<style scoped />
