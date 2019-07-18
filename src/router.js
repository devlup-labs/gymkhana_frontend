import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Konnekt from "./views/Konnekt";
import KonnektHome from "./components/KonnektHome";
import KonnektSearch from "./components/KonnektSearch";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login")
    },
    {
      path: "/konnekt",
      component: Konnekt,
      children: [
        { name: "konnekt-home", path: "", component: KonnektHome },
        {
          name: "konnekt-search",
          path: "search",
          component: KonnektSearch
        }
      ]
    }
  ]
});
