<template>
  <div>
    <h1>Chat Settings {{route}} </h1>

    <h2>Localization</h2>

    <lang-selection />

    <p>Example Test From Current Language: <strong>{{$t('hello.world')}}</strong></p>

  </div>
</template>

<script>
import LangSelection from "./LangSelection";

export default {
  name: "ChatSettings",
  components: {
    LangSelection
  }
};
</script>

<style scoped lang="scss">
</style>
