<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    document.title = "Electiva";
  }
};
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Poppins");
  body {
    font-family: 'Poppins', sans-serif;
  }
</style>