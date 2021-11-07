import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import detail from "../views/detail.vue";
import login from "../views/login.vue";
import about from "../views/about.vue";
import cinema from "../views/cinema.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "detail",
        name: "detail",
        component: detail
      },
      {
        path: "login",
        name: "login",
        component: login
      },
      {
        path: "about",
        name: "about",
        component: about
      },
      {
        path: "cinema",
        name: "cinema",
        component: cinema
      },
      {
        path: "/",
        redirect: "about"
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
