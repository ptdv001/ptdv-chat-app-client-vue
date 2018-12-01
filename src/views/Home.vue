<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Chat-App-v3</h1>

    <p>Go to
      <router-link :to="{name: 'ChatApp', params: { id: 1 }}">Test Chat 1</router-link>
    </p>
    <p>Go to Settings
      <router-link :to="{name: 'ChatSettings'}">Chat Settings</router-link>
    </p>

    <button class="btn">Test</button>

    <div class="text-left">
      <span>Progress Bar Infinite:</span>
      <div class="ptdv-progressbar" style="height: 20px"></div>
    </div>

    <br/>

    <div class="text-left" style="width: 25em; border: 1px solid grey;">
      <div>Truncate after two lines:</div>
      <span class="ptdv-truncate-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
