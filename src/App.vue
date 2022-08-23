<template>
  <Shop />
</template>

<script>
import Shop from "./components/Shop.vue";

export default {
  name: "App",
  components: {
    Shop,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1f2020;
}
</style>
