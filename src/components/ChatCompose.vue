<template>
  <section class="chat-compose-container">
    <form class="col-12" @submit.stop.prevent="sendMessage">
      <label class="sr-only" for="chat-send">Compose a Message</label>
      <!-- autofocus doesn't work on safari? why this -->
      <input
        class="chat-compose col-11"
        id="chat-compose"
        type="text"
        required
        :placeholder="placeholder"
        pattern="[a-z|A-Z|0-9]{1,}"
        v-ptdv-focus>
      <!-- TODO consider UUID gen for ID for reusability -->
      <button class="chat-send col-1" type="submit">Send</button>
    </form>
  </section>
</template>

<script>
import PtdvFocus from '../directives/focus';

export default {
  name: "ChatCompose",
  directives: {
    PtdvFocus
  },
  props: {
    placeholder: {
      type: String,
      default: 'Compose a message here (currently only a-zA-Z0-9 chars allowed)'
    }
  },
  methods: {
    sendMessage(messageEvent) {
      const messageEl = messageEvent.target.querySelector('#chat-compose');
      const message = messageEl.value;

      if (message !== '') {
        this.$emit('message', message);
        messageEl.value = '';
      }
    }
  }
};
</script>

<style scoped lang="scss">
.chat-compose-container {}
</style>
