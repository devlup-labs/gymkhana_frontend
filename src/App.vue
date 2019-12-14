<template lang="pug">
  v-app
    SidenavHeader(v-if="!!$router.currentRoute.meta.sidenav")
    Header(v-else)
    v-content
      router-view
</template>

<script>
import Header from "./components/common/Header";
import SidenavHeader from "./components/common/SidenavHeader";

export default {
  name: "App",
  components: {
    Header,
    SidenavHeader
  }
};
</script>
