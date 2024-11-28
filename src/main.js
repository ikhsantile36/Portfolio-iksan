import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import router from "./router";


createApp(App)
  .use(router) // Pastikan router dipakai di sini
  .mount('#app');