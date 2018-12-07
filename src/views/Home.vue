<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Welcome to the Chats</h2>

    <p>Go to <router-link :to="{name: 'ChatApp', params: { id: 1 }}">Test Chat 1</router-link></p>
    <p>Go to <router-link :to="{name: 'ChatApp', params: { id: 2 }}">Test Chat 2</router-link></p>
    <p>Go to Examples <router-link :to="{name: 'examples'}">Examples</router-link></p>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
