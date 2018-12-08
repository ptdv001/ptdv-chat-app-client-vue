<template>
  <div>
    <h3>Account</h3>
    <p>Account email: {{email | emailMask}}</p>
    <p>Account Balance: <strong>{{$n(balanceAmount, 'currency')}}</strong></p>
    <p>Account Created on: {{$d(new Date(), 'short', locale)}}</p>
    <p>Last Login on: {{$d(new Date(), 'long', locale)}}</p>
    <!-- simpler use would be {{new Date() | moment('add', '2 years')}} -->
    <p>Account Expires: <strong>{{$d(addTwoYearsToTodayUsingMoment(), 'short', locale)}}</strong></p>

    <h3>Language</h3>
    <lang-selection />
    <p>Example Test From Current Language: <strong>{{$t('hello.world')}}</strong></p>
  </div>
</template>

<script>
import Vue from "vue";
import { i18n } from "../i18n";
import LangSelection from "./LangSelection";

export default {
  name: 'AccountSettings',
  components: {
    LangSelection
  },
  data() {
    return {
      email: 'pthiessen@blizzard.com',
      balanceAmount: 100
    };
  },
  computed: {
    locale() {
      return i18n.locale;
    }
  },
  methods: {
    // Note better to do math using moment in Template - see above note
    addTwoYearsToTodayUsingMoment() {
      return Vue.filter('moment')(new Date(), 'add', '2 years');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
