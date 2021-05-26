<template lang="pug">
div(class="tile-container" id="tile-container")
    div(v-for="(tile,key) in tiles" :key="key" class="tile tile_new"
    :class="mergeCheck(tile.merged)+' tile-'+tile.value"
    :style="{transform: 'translate(' +calcStyleX(tile.x)+'px'+','+ calcStyleY(tile.y) + 'px)'}"
    )
        div(class="tile-inner") {{tile.value}}
</template>
<script>
export default {
  name: "tile",
  replace: true,
  props: ["tiles"],
  methods: {
    calcStyleX: function(x) {
      var tilePosition = this.$parent.tilePosition;
      return tilePosition * x;
    },

    calcStyleY: function(y) {
      var tilePosition = this.$parent.tilePosition;

      return tilePosition * y;
    },
    mergeCheck: function(m) {
      if (m) {
        return "tile-merged";
      } else {
        return "";
      }
    }
  }
};
</script>
<style scoped src="../plugins/style.css"></style>
