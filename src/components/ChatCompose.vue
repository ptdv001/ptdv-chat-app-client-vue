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
        :pattern="composeWhiteListRegex"
        autocomplete="off"
        :placeholder="placeholder"
        v-ptdv-focus
        @keypress="setStatusTyping"
        @blur="setStatusNotTyping">
      <!-- TODO consider UUID gen for ID for reusability -->
      <button class="chat-send col-1" type="submit">Send</button>
    </form>
  </section>
</template>

<script>
import _ from 'lodash';
import PtdvFocus from '../directives/focus';

export default {
  name: "ChatCompose",
  directives: {
    PtdvFocus
  },
  data() {
    return {
      composeWhiteListRegex: '[a-z|A-Z|0-9|\\s]{1,}'
    };
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

      this.setStatusNotTyping();
    },
    setStatusTyping() {
      _.debounce(() => {
        this.$store.commit('setUserStatus', 'TYPING');
      }, 200)();
    },
    setStatusNotTyping() {
      setTimeout(() => {
        // TODO some kind of reset-previous status, maybe in store actions
        this.$store.commit('setUserStatus', 'ONLINE');
      }, 500);
    }
  }
};
</script>

<style scoped lang="scss">
.chat-compose-container {}
</style>
