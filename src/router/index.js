import { createRouter, createWebHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/Home.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../components/Team.vue"),
    },
    {
      path: "/matches",
      name: "matches",
      component: () => import("../components/Matches.vue"),
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: () => import("../components/About.vue"),
    },
    {
      path: "/donate",
      name: "donate",
      component: () => import("../components/Donate.vue"),
    },
  ],
});

export default router;
