import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AddJobView from "@/views/AddJobView.vue";
import JobView from "@/views/JobsView.vue";
import JobDetailsView from "@/views/JobDetailsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/jobs", component: JobView },
  { path: "/jobs/:id", component: JobDetailsView, props: true },
  { path: "/add-job", component: AddJobView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "bg-green-900",
});
