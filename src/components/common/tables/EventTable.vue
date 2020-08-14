<template lang="pug">
    v-simple-table.elevation-4
      thead(class="primary lighten-1 gray--text")
        th.pr-0
          v-icon mdi-pen
        th.subtitle-1.justify-start Name
        th.subtitle-1.text-center
          v-icon mdi-calendar
      tbody
        tr(v-for="({node},i) in eventsList" :key="i" @click.stop="showDialog({node})")
          td
            v-icon mdi-chevron-right
          td {{node.name}}
          td.text-center {{ node.date.substring(0,node.date.indexOf('T')) }}
      v-dialog.elevation-12( v-model="dialog" max-width="500")
        v-card(v-if="singleEvent")
          v-card-title(class="primary darken-1 white--text").justify-center
            v-spacer
            span.ml-4 {{singleEvent.node.name}}
            v-spacer
            v-btn(icon dark @click="dialog = false")
              v-icon(right) mdi-close-circle
          v-card-text
            v-container.ma-4
              v-layout(row)
                v-flex.md4.align-content-center.xs4
                  v-icon.mb-1(left) mdi-calendar
                  | {{singleEvent.node.date.substring(0,singleEvent.node.date.indexOf('T'))}}
                v-flex.md4.xs4
                  v-icon.mb-1(left) mdi-clock
                  | {{singleEvent.node.date.substring(singleEvent.node.date.indexOf(':')+1,singleEvent.node.date.length-6)}} hrs
                v-flex.md4.xs4
                  v-icon.mb-1(left) mdi-map-marker
                  | {{singleEvent.node.location}}
                v-flex.md12.xs12.mt-5.text-center
                  p {{singleEvent.node.description}}
          v-card-actions.justify-end
            v-btn(@click="dialog = false" class="primary darken-1 white--text" small) close

</template>

<script>
export default {
  name: "EventTable",
  props: {
    eventsList: {
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
