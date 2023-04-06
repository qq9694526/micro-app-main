<template>
  <div class="home">
    <h1>Main Home</h1>
    <el-input v-model="name"></el-input>
    <button @click="onClick">设置action name</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    console.log(this.$actions);
    return {
      name: "",
    };
  },
  created() {
    this.$actions.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log(state, prev);
      this.name = state.name;
    }, true);
  },
  methods: {
    onClick() {
      this.$actions.setGlobalState({
        name: this.name,
      });
    },
  },
};
</script>
