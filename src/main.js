import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { Tabs, Tab } from "vue3-tabs-component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "animate.css";

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faPaypal,
  faYoutube,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faCircleCheck,
  faCircleMinus,
  faCircleXmark,
  faEnvelope,
  faCoins,
  faFutbol,
  faShield,
  faMoneyBillWave,
  faXmark,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import "./assets/main.css";
import axios from "axios";

library.add(
  faFacebook,
  faInstagram,
  faPhone,
  faCircleCheck,
  faCircleMinus,
  faCircleXmark,
  faWhatsapp,
  faEnvelope,
  faCoins,
  faPaypal,
  faFutbol,
  faShield,
  faMoneyBillWave,
  faXmark,
  faBars,
  faYoutube,
  faTiktok
);
const application = createApp(App);

application.use(router);
application.use(createPinia());
application.component("font-awesome-icon", FontAwesomeIcon);
application.component("tabs", Tabs);
application.component("tab", Tab);
application.mount("#app");
axios.defaults.baseURL = "https://ruirusportiffacademy.com";
