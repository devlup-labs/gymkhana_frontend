<template lang="pug">
    v-simple-table.elevation-4
      thead(class="primary gray--text")
        th.pr-0
          v-icon mdi-pen
        th.subtitle-1.justify-start Name
        th.subtitle-1.text-center
          v-icon mdi-calendar
      tbody
        tr(v-for="({node},i) in eventTableData.edges" :key="i" @click.stop="showDialog({node})")
          td
            v-icon mdi-chevron-right
          td {{node.name}}
          td.text-center {{ node.date }}
      v-dialog.elevation-12( v-model="dialog"
      persistent
        max-width="500")
          v-card
            v-card-title(class="primary darken-1 white--text").justify-center
              v-spacer
              span.ml-4 {{singleEvent.node.name}}
              v-spacer
              v-btn(icon dark @click="dialog = false")
                v-icon(right) mdi-close-circle
            v-card-text
              v-container.ma-4
                v-layout(row)
                  v-flex.md4
                    v-icon(left) mdi-calendar
                    | {{singleEvent.node.date}}
                  v-flex.md4
                    v-icon(left) mdi-clock
                    | {{singleEvent.time}}
                  v-flex.md4
                    v-icon(left) mdi-map-marker
                    | {{singleEvent.node.location}}
                  v-flex.md12.mt-5
                    p {{singleEvent.node.description}}
            v-card-actions.justify-end
              v-btn(@click="dialog = false" class="primary darken-1 white--text" small) close

</template>

<script>
export default {
  name: "EventTable",
  props: {
    eventTableData: null
  },
  data: () => ({
    singleEvent: {},
    events: [
      {
        name: "Event 1",
        date: "tomorrow",
        time: "12:24 p.m.",
        location: "IIT-J",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dignissimos, distinctio eaque esse, est et eveniet ipsam laboriosam nam neque nesciunt placeat porro quibusdam quidem quos repudiandae rerum similique."
      },
      {
        name: "Event 2",
        date: "23/01/2011",
        time: "01:24 p.m.",
        location: "IIT-J",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dignissimos, distinctio eaque esse, est et eveniet ipsam laboriosam nam neque nesciunt placeat porro quibusdam quidem quos repudiandae rerum similique."
      },
      {
        name: "Event 3",
        date: "tomorrow",
        time: "14:24 p.m.",
        location: "IIT-J"
      },
      {
        name: "Event 4",
        date: "tomorrow",
        time: "12:24 p.m.",
        location: "IIT-J"
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
