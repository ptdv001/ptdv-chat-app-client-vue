<template>
  <section>
    <h1><span v-if="chatName">{{chatName}}</span></h1>
    <chat-messages :messages="messages" ref="chatMessages" />
    <chat-compose @message="sendMessage" />
  </section>
</template>

<script>
import ChatService from '../services/chat-service.js';
import ChatMessages from '../components/ChatMessages.vue';
import ChatCompose from '../components/ChatCompose.vue';

export default {
  name: "chat",
  components: {
    ChatMessages,
    ChatCompose
  },
  data() {
    return {
      loadComplete: false,
      chatName: null,
      chatCreated: null,
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
        .then(chat => {
          this.loadComplete = true;
          this.chatName = chat.name;
          this.chatCreated = chat.timestamp
          this.messages = chat.messages;

          this.$refs.chatMessages.scrollMessages();

          //TODO
          this.$store.commit('setUserStatus', 'ONLINE');
        });
    },
    sendMessage(messageContent) {
      //TODO when have an API send to server with a listener method here to call addMessage instead
      this.addMessage({
        id: this.messages.length + 1,
        username: 'new user',
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
