<template>
  <div>
    <h1>Chat Messages {{route}} </h1>

    <p>Loc Test, message status away: <strong>{{getStatus('AWAY')}}</strong></p>

    Mask Email: {{'pthiessen@blizzard.com' | emailMask}}
  </div>
</template>

<script>
import { getLocalizedStatus } from "../utils/status.js";

export default {
  name: "ChatMessages",
  props: {},
  computed: {
    route() {
      return this.$route.params.id;
    }
  },
  methods: {
    getStatus(statusId) {
      return getLocalizedStatus(statusId);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
