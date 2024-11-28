import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Projects from "../pages/Projects.vue";
import Calculator from "../components/Kalkulator.vue";
import MainPage from "../pages/MainPage.vue";
import TodoList from "../components/TodoList.vue";
import Stopwatch from "../components/Stopwatch.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/#about", component: About },
  { path: "/#projects", component: Projects },
  { path: "/calculator", component: Calculator },
  { path: "/to-do-list", component: TodoList },
  { path: "/stopwatch", component: Stopwatch },
  { path: "/#contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});


export default router;
