<template>
  <header class="nav-bar">
      <h1><router-link :to="{name: 'home'}">PTDV-Chat</router-link></h1>
      <div class="account-settings">
        <fa-icon icon="cog" class="fa-2x mr-2" aria-hidden="false" title="Black Heart" />
        <div>
          <router-link :to="{name: 'settings'}">{{email | emailMask}}</router-link>
          <div>Status <strong>{{userStatus}}</strong></div>
        </div>
      </div>

  </header>
</template>

<script>
import { getLocalizedStatus } from "../utils/status.js";

export default {
  name: "NavBar",
  data() {
    return {
      email: 'peter@someemail.com'
    };
  },
  computed: {
    userStatus() {
      return this.getLocalizedStatus(this.$store.state.userStatus);
    }
  },
  methods: {
    getLocalizedStatus(statusId) {
      return getLocalizedStatus(statusId);
    }
  }
};
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  padding: .5rem;
  border-bottom: 1px solid #ccc;

  .account-settings {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
