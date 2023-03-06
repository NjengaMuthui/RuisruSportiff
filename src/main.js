import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Tabs, Tab } from "vue3-tabs-component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "animate.css";

import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faPaypal
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
  faBars
);
const application = createApp(App);

application.use(router);
application.use(store);
application.component("font-awesome-icon", FontAwesomeIcon);
application.component("tabs", Tabs);
application.component("tab", Tab);
application.mount("#app");
