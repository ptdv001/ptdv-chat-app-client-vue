<template>
  <div>
    <ul v-if="messages" class="messages">
      <li v-for="message in messages" :key="message.id" class="message row">
        <span class="user col-1">{{message.user}}</span>
        <span class="message-message ptdv-truncate-2 col-10">{{message.message}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChatMessages",
  props: {
    messages: {
      type: Array
    }
  }
};
</script>

<style scoped lang="scss">
.messages {
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
</style>
