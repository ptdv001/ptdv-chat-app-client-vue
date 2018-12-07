<template>
  <div>
    <h2>Chat Settings</h2>
    <p>Chat Created on: {{$d(new Date(), 'short', locale)}}</p>
    <p>Last Login on: {{$d(new Date(), 'long', locale)}}</p>
    <!-- simpler use would be {{new Date() | moment('add', '2 years')}} -->
    <p>Chat Expires: <strong>{{$d(addTwoYearsToTodayUsingMoment(), 'short', locale)}}</strong></p>
  </div>
</template>

<script>
import Vue from "vue";
import { i18n } from "../i18n";

export default {
  name: "ChatSettings",
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
