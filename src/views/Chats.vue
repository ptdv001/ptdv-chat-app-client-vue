<template>
  <section>
    <h3>Current Chats</h3>
    <ul v-if="chats" class="chat-list">
      <li v-for="chat in chats" :key="chat.id">
        Go to
        <router-link :to="{name: 'chat', params: { id: chat.id }}">{{chat.name}}</router-link>
        created on {{chat.timestamp}}
      </li>
    </ul>
  </section>
</template>

<script>
import ChatsService from '../services/chats-service.js';

export default {
  name: "chats",
  components: {
  },
  data() {
    return {
      loadComplete: false,
      chats: []
    };
  },
  computed: {
  },
  created() {
    this.getChats();
  },
  methods: {
    getChats() {
      const chatsService = new ChatsService();
      chatsService.getChats()
        .then(chats => {
          this.loadComplete = true;
          this.chats = chats;
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
