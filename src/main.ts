import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEnvelope,
  faCalendar,
  faUserCheck,
  faSyncAlt,
  faUsers,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faVuejs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

// Global styles
import "@/assets/styles/main.scss";

// Register all icons
library.add(
  faEnvelope,
  faCalendar,
  faUserCheck,
  faSyncAlt,
  faUsers,
  faLightbulb,
  faGithub,
  faLinkedin,
  faTwitter,
  faVuejs,
  faNodeJs
);

// Create and mount the Vue app
createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
