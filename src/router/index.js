import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/MyHome.vue";
import Skills from "../views/MySkills.vue";
import About from "../views/AboutMe.vue";
import Projects from "../views/MyProjects.vue";
import Contact from "../views/ContactMe.vue";
import Hire from "../views/HireMe.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/skills", component: Skills },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "/hire-me", component: Hire, name: "hire-me" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
