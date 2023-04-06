<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/vue">Vue</router-link> |
      <router-link to="/vue/about">Vue about</router-link>
    </div>
    <button @click="onClick">loadMicroApp:vue/about</button>
    <router-view />
    <div id="container"></div>
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";
export default {
  data() {
    return {
      vueApp: null,
    };
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
