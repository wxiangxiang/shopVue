<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
let htmlWidth =
  document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName("html")[0];
htmlDom.style.fontSize = htmlWidth / 20 + "px";
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3.75rem; */
}
</style>
