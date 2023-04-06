import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);

import { registerMicroApps, start, initGlobalState } from "qiankun";
registerMicroApps([
  {
    name: "app-vue", // app name registered
    entry: "//192.168.26.143:8081/",
    container: "#container",
    activeRule: "/#/vue",
  },
]);
const actions = initGlobalState({
  name: "app",
});
Vue.prototype.$actions = actions;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

start();
