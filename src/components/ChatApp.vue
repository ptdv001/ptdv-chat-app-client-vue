<template>
  <div>
    <h1>Chat <span v-if="chatName">{{chatName}}</span> <strong>{{$t('hello.world')}}</strong></h1>
    <chat-messages :messages="messages" ref="chatMessages" />
    <chat-compose @message="sendMessage" />
  </div>
</template>

<script>
import ChatService from '../services/chat-service.js';
import ChatMessages from './ChatMessages.vue';
import ChatCompose from './ChatCompose.vue';

export default {
  name: "ChatApp",
  components: {
    ChatMessages,
    ChatCompose
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

          this.$refs.chatMessages.scrollMessages();
        });
    },
    sendMessage(messageContent) {
      //TODO when have an API send to server with a listener method here to call addMessage instead
      this.addMessage({
        id: this.messages.length + 1,
        user: 'new user',
        message: messageContent
      });
    },
    addMessage(newMessage) {
      this.messages.push(newMessage);
      this.$refs.chatMessages.scrollMessages();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
