<template>
  <section class="chat-messages-container">
    <ul v-if="messages" class="messages">
      <li v-for="message in messages" :key="message.id" class="message">
        <span class="user col-1 text-right">{{message.user}}</span>
        <span class="message-message ptdv-truncate-2 col-10">{{message.message}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ChatMessages",
  props: {
    messages: {
      type: Array
    }
  },
  methods: {
    scrollMessages() {
      // Wait a moment for any new messages to be added to the DOM
      this.$nextTick(() => {
        const messagesListEl = this.$el.querySelector('.messages');
        const scrollToEl = messagesListEl.lastElementChild;

        if (scrollToEl) {
          scrollToEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.chat-messages-container {
  .messages {
    overflow-y: auto;
    height: 500px;  //todo

    .message {
      display: flex;
      margin-bottom: 1rem;

      .user {
        margin-right: 1rem;
        white-space: nowrap;
      }

      .message-message {}
    }
  }
}
</style>
