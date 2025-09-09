import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCalendar,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faEnvelope, faPhone, faCalendar, faClipboard);
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
