<template>
  <div class="home m-4">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="text-center mb-5">
      <fa-icon :icon="['ptdv', 'home']" class="fa-5x" />
      <h2>Welcome to the Chats</h2>
    </div>

    <section>
      <h3>TODO Login</h3>
      <router-link :to="{name: 'chats'}">Go To Chats List</router-link>
    </section>

    <br><br><br><br><br><br>
    <p>Go to Examples <router-link :to="{name: 'temp-examples'}">Examples</router-link></p>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.home {}
</style>
