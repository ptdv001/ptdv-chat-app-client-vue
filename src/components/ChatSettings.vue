<template>
  <div>
    <h1>Chat Settings {{route}} </h1>

    <h2>Localization</h2>

    <lang-selection />

    <p>Test Language: <strong>{{$t('hello.world')}}</strong></p>
    <p>Test Currency: <strong>{{$n(100, 'currency')}}</strong></p>
    <p>Test Date short: <strong>{{$d(new Date(), 'short', locale)}}</strong></p>
    <p>Test Date long: <strong>{{$d(new Date(), 'long', locale)}}</strong></p>

    <!-- simpler use would be {{new Date() | moment('add', '2 years')}} -->
    <p>Manipulate time (+2years) <strong>{{$d(addTwoYearsToTodayUsingMoment, 'short', locale)}}</strong></p>

  </div>
</template>

<script>
import Vue from "vue";
import LangSelection from "./LangSelection";
import { i18n } from "../i18n";

export default {
  name: "ChatSettings",
  components: {
    LangSelection
  },
  props: {},
  computed: {
    route() {
      return this.$route.params.id;
    },
    locale() {
      return i18n.locale;
    },
    addTwoYearsToTodayUsingMoment() {
      return Vue.filter("moment")(new Date(), "add", "2 years");
    }
  }
};
</script>

<style scoped lang="scss">
</style>
