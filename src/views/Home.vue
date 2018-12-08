<template>
  <div class="home m-4">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="text-center mb-5">
      <fa-icon :icon="['ptdv', 'home']" class="fa-5x" />
      <h2>Welcome to the Chats</h2>
    </div>

    <h3>Current Chats</h3>
    <ul class="chat-list">
      <li>Go to <router-link :to="{name: 'ChatApp', params: { id: 1 }}">Test Chat 1</router-link></li>
      <li>Go to <router-link :to="{name: 'ChatApp', params: { id: 2 }}">Test Chat 2</router-link></li>
    </ul>

    <p>Go to Examples <router-link :to="{name: 'examples'}">Examples</router-link></p>
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
