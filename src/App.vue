<template lang="pug">
  v-app
    Header
    v-content
      v-container(fluid fill-height)
        router-view
</template>

<script>
import Header from "./components/common/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      //
    };
  }
};
</script>
