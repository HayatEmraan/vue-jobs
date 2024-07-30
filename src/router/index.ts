import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/App.vue";
import AddJob from "@/views/AddJob.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/add-job", component: AddJob },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
