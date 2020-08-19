<template lang="pug">
  v-row.justify-center.mt-5
    v-hover(v-slot:default="{ hover }")
      v-card.mx-auto(
        :to="{ name: node.__typename === 'SocietyNode' ? 'society' : 'club' , params: { slug: node.slug } }"
        :elevation="hover ? 15 : 2"
        height="80%"
        width="80%"
      )
        v-img(
          :src="node.cover.sizes.length ? node.cover.sizes.find(e => e.name === 'medium_square_crop').url : require('../../../assets/cover4.svg')"
          min-height="250px"
        )
          v-layout.align-end.fill-height
            v-card-text(v-if="node.__typename === 'SocietyNode'").my-6.title.text-center.stripe {{ node.name }}
            v-card-text(v-else).my-10.text-center.stripe.subtitle-1.font-weight-medium {{ node.name }}
</template>

<script>
export default {
  name: "StripedCard",
  props: {
    node: { type: Object, required: true }
  }
};
</script>

<style scoped>
.stripe {
  background: rgba(255, 255, 255, 0.7);
}
</style>
