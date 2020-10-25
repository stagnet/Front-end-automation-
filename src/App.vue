<template>
  <div id="app">
    <!-- remember always wrap whole app with v-app to include properly vuetify styles
      -->
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "App",
  };
</script>
