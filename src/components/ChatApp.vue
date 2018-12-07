<template>
  <div>
    <h1>Chat <span v-if="chatName">{{chatName}}</span> <strong>{{$t('hello.world')}}</strong></h1>
    <chat-messages :messages="messages" />
  </div>
</template>

<script>
import ChatService from '../services/chat-service.js';
import ChatMessages from './ChatMessages.vue';

export default {
  name: "ChatApp",
  components: {
    ChatMessages
  },
  data() {
    return {
      loadComplete: false,
      chatName: null,
      messages: null
    };
  },
  computed: {
    route() {
      return this.$route.params.id;
    }
  },
  created() {
    this.getChat();
  },
  methods: {
    getChat() {
      const chatService = new ChatService();
      chatService.getChat(this.route)
        .then(response => {
          this.loadComplete = true;
          this.chatName = response.name;
          this.messages = response.messages;
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
