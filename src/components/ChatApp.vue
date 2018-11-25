<template>
  <div>
    <h1>Chat App {{route}}</h1>
    <strong>{{$t('hello.world')}}</strong>
    <chat-messages />
  </div>
</template>

<script>
import ChatMessages from "./ChatMessages.vue";

export default {
  name: "ChatApp",
  components: {
    ChatMessages
  },
  props: {},
  computed: {
    route() {
      return this.$route.params.id;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
