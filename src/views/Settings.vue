<template>
  <div>
    <h2>Settings</h2>
    <account-settings />
  </div>
</template>

<script>
import AccountSettings from '../components/AccountSettings.vue';

export default {
  name: 'settings',
  components: {
    AccountSettings
  }
}
</script>
