<template>
  <div>
    <login-form />
  </div>
</template>

<script>
  import loginForm from "../../components/forms/login";
  export default {
    name: "Forms",
    components: {
      loginForm,
    },
  };
</script>

<style lang="scss" scoped>
  // .button {
  //   background-color: #1976d2;
  // }
</style>
