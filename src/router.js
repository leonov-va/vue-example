import Home from "@/views/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/todos", component: () => import("./views/Todos.vue") },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
