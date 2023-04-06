<template>
  <div class="about">
    <h1>Main About</h1>
    <button @click="onClick">loadMicroApp:vue/about</button>
  </div>
</template>
<script>
import { loadMicroApp } from "qiankun";

export default {
  data() {
    return {};
  },
  methods: {
    onClick() {
      if (this.vueApp) {
        console.log("this.vueApp", this.vueApp);
        this.$router.push("/vue/about");
      } else {
        this.vueApp = loadMicroApp({
          name: "app-vue",
          entry: "//localhost:8081/#/vue/about",
          container: "#container",
        });
      }
    },
  },
};
</script>
