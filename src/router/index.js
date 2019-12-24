import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Konnekt from "../views/Konnekt";
import KonnektHome from "../components/KonnektHome";
import KonnektSearch from "../components/KonnektSearch";
import OfficeBearers from "../views/OfficeBearers";

Vue.use(VueRouter);

const sidenavRouteMeta = {
  sidenav: true
};

const routes = [
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/konnekt",
    component: Konnekt,
    meta: sidenavRouteMeta,
    children: [
      {
        name: "konnekt-home",
        path: "",
        meta: sidenavRouteMeta,
        component: KonnektHome
      },
      {
        name: "konnekt-search",
        path: "search",
        meta: sidenavRouteMeta,
        component: KonnektSearch
      }
    ]
  },
  {
    path: "/office-bearers",
    name: "office-bearers",
    component: OfficeBearers
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
