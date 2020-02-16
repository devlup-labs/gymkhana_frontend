<template lang="pug">
  v-simple-table.elevation-4
    thead(class="primary lighten-1 gray--text")
      th.pr-0
        v-icon mdi-pen
      th.subtitle-1.justify-start Title
      th.subtitle-1.text-center
        v-icon mdi-calendar
    tbody(v-if="newsData")
      tr(v-for="({node},i) in newsData.edges" :key="i" @click.stop="showDialog({node})")
        td
          v-icon mdi-chevron-right
        td {{node.title}}
        td.text-center {{ node.date }}
    tbody(v-else v-for="({node},i) in societyNewsData.edges" :key="i")
      tr(v-for="({node}) in node.newsSet.edges" :key="k" @click.stop="showDialog({node})")
        td
          v-icon mdi-chevron-right
        td {{node.title}}
        td.text-center {{ node.date }}
    v-dialog.elevation-12( v-model="dialog"
      persistent
      max-width="500")
      v-card(v-if="singleEvent")
        v-card-title(class="primary darken-1 white--text").justify-center
          v-spacer
          span.ml-4 {{singleEvent.node.title}}
          v-spacer
          v-btn(icon dark @click="dialog = false")
            v-icon(right) mdi-close-circle
        v-card-text
          v-container
            v-layout(row)
              v-flex.md12
                v-img(:src="singleEvent.node.cover" max-height="230" alt="Image" cover).elevation-10
              v-flex.md6.mt-4.offset-2
                v-icon(left) mdi-calendar
                | {{singleEvent.node.date}}
              v-flex.md4.mt-4
                v-icon(left) mdi-account
                | {{singleEvent.node.author.user.firstName}} {{singleEvent.node.author.user.lastName}}
              v-flex.md12.mt-5
                p {{singleEvent.node.content.substring(5,singleEvent.node.content.length-6)}}
        v-card-actions.justify-end
          v-btn(@click="dialog = false" class="primary darken-1 white--text" small) close

</template>

<script>
export default {
  name: "NewsTable",
  props: {
    newsData: {},
    societyNewsData: {}
  },
  data: () => ({
    singleEvent: null,
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
