<template lang="pug">
  v-row.justify-center.mt-5
    v-hover( v-slot:default="{ hover }")
      v-card.mx-auto(
        :to="!nodeData.__typename.localeCompare(\"SocietyNode\")?{name: 'society', params: {slug: nodeData.slug}}:{name: 'club', params: {slug: nodeData.slug}}"
        :elevation="hover ? 15 : 2"
        height="80%"
        width="80%"
      )
        v-img(:src="nodeData.cover.sizes.length ? nodeData.cover.sizes.find(e => e.name === 'full_size').url : require('../../assets/cover4.svg')" min-height="250px")
          v-layout.align-end.fill-height
            v-card-text(v-if="!nodeData.__typename.localeCompare(\"SocietyNode\")").my-6.title.text-center.stripe {{nodeData.name}}
            v-card-text(v-else).my-10.text-center.stripe.subtitle-1.font-weight-medium {{nodeData.name}}
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
