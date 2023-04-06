import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// import { registerMicroApps, start } from "qiankun";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// registerMicroApps([
//   {
//     name: "app-vue", // app name registered
//     entry: "//192.168.26.143:8081/",
//     container: "#container",
//     activeRule: "/#/vue",
//   },
// ]);

// start();
