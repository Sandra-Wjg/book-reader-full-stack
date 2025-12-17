import { createWebHistory, createRouter } from "vue-router";

import LoginView from "./pages/Login/index.vue";
import AboutView from "./pages/About/index.vue";

const routes = [
  { path: "/", component: LoginView },
  { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
