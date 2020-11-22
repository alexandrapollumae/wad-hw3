<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  methods: {
  },
  components: {
    Header,
  }

}
</script>

<style>
  * {
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #0277bd;
    color: #263238;
  }

  a {
    color: #40c4ff;
  }

</style>
