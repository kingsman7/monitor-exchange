import Vue from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import { dollarFilter, percentFilter } from "@/filters";

import Chartkick from "vue-chartkick";
import Highcharts from "highcharts";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Highcharts));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
