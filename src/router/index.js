import { createRouter, createWebHistory } from "vue-router";
import FirstPage from "../views/FirstPage.vue";
const routes = [
  {
    path: "/first",
    name: "first",
    component: FirstPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
