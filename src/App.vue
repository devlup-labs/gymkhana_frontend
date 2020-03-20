<template lang="pug">
  v-app
    SidenavHeader(v-if="!!$router.currentRoute.meta.sidenav")
    Header(v-else)
    v-content
      router-view
    Footer(v-if="!$router.currentRoute.meta.sidenav")
</template>

<script>
import Header from "./components/common/Header";
import SidenavHeader from "./components/common/SidenavHeader";
import Footer from "./components/common/Footer";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    SidenavHeader
  },
  methods: {
    handleScroll() {
      if (this.$route.name !== "office-bearers") {
        if (window.scrollY < 10) {
          document
            .getElementsByTagName("header")[0]
            .setAttribute(
              "style",
              "background-color: rgba(255,255,255,0);width:100%;"
            );
        } else if (window.scrollY > 150) {
          document
            .getElementsByTagName("header")[0]
            .setAttribute("style", "background-color: #424242;width:100%;");
          document
            .getElementsByTagName("header")[0]
            .classList.remove("elevation-0");
        }
      }
    }
  },
  mounted() {
    document
      .getElementsByTagName("header")[0]
      .setAttribute(
        "style",
        "background-color: rgba(255,255,255,0);width:100%;"
      );
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
