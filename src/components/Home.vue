<template>
  <div class="home">
    <Header/>
    <router-view>
      <h1>HSDSHSDH</h1>
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    Header
    //Browse
  }
}
</script>

<style scoped>

</style>