<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Login from "@/components/Login";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Login,
    Header
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  font-family: 'Roboto Slab', serif;
  outline: none;
}
</style>
