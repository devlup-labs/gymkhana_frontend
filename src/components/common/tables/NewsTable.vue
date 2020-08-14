<template lang="pug">
  v-simple-table.elevation-4
    thead(class="primary lighten-1 gray--text")
      th.pr-0
        v-icon mdi-pen
      th.subtitle-1.justify-start Title
      th.subtitle-1.text-center
        v-icon mdi-calendar
    tbody
      tr(v-for="({node},i) in newsList" :key="i" @click.stop="showDialog({node})")
        td
          v-icon mdi-chevron-right
        td {{node.title}}
        td.text-center {{ node.date }}
    v-dialog.elevation-12( v-model="dialog"
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
            v-layout(row).text-center
              v-flex.md12
                v-img(v-if="singleEvent.node.cover.sizes.length" :src="singleEvent.node.cover.sizes.find(e => e.name === 'full_size').url" max-height="230" alt="Image" cover).elevation-10
              v-flex.md6.mt-6.text-center
                v-icon.mb-1(left) mdi-calendar
                | {{singleEvent.node.date}}
              v-flex.md6.mt-6.text-center
                v-icon.mb-1(left) mdi-account
                | {{singleEvent.node.author.user.firstName}} {{singleEvent.node.author.user.lastName}}
              v-flex.md12.mt-5
                p {{singleEvent.node.content.substring(3,singleEvent.node.content.length-4)}}

</template>

<script>
export default {
  name: "NewsTable",
  props: {
    newsList: {
      type: Array,
      required: true
    }
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
