import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/detail",
    component: () => import("./views/Detail.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
