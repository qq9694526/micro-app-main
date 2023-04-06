<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/">Main Home</el-menu-item>
      <el-menu-item index="/about">Main About</el-menu-item>
      <el-menu-item index="/vue">Vue Home</el-menu-item>
      <el-menu-item index="/vue/about">Vue About</el-menu-item>
    </el-menu>
    <router-view />
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vueApp: null,
      activeIndex: "/",
    };
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
}
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
