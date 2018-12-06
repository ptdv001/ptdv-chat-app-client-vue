<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Chat-App-v3</h1>

    <p>Go to <router-link :to="{name: 'ChatApp', params: { id: 1 }}">Test Chat 1</router-link></p>
    <p>Go to Settings <router-link :to="{name: 'ChatSettings'}">Chat Settings</router-link></p>
    <p>Go to Examples <router-link :to="{name: 'examples'}">Examples</router-link></p>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
