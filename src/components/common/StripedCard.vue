<template lang="pug">
  v-row.justify-center
    v-hover( v-slot:default="{ hover }")
      v-card.mx-auto(
        :to="{name: 'society', params: {slug: nodeData.slug}}"
        :elevation="hover ? 15 : 2"
        height="80%"
        width="80%"
      )
        v-img(:src="nodeData.cover.sizes[0].url")
          v-layout.align-end.fill-height
            v-card-text.my-6.title.text-center.stripe {{nodeData.name}}
</template>

<script>
export default {
  name: "StripedCard",
  props: {
    nodeData: null
  }
};
</script>

<style scoped>
.stripe {
  background: rgba(255, 255, 255, 0.7);
}
</style>
