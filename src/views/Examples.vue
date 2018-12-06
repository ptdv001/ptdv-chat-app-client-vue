<template>
  <section class="examples">
      <h1>Examples</h1>
      <p>A temporary page for temporary examples the should be moved to chat components once a related on exists.</p>

      <h2>Localization</h2>
      <p>Test Currency: <strong>{{$n(100, 'currency')}}</strong></p>
      <p>Test Date short: <strong>{{$d(new Date(), 'short', locale)}}</strong></p>
      <p>Test Date long: <strong>{{$d(new Date(), 'long', locale)}}</strong></p>

      <!-- simpler use would be {{new Date() | moment('add', '2 years')}} -->
      <p>Manipulate time (+2years) <strong>{{$d(addTwoYearsToTodayUsingMoment, 'short', locale)}}</strong></p>

      <hr>

      <h2>Icons</h2>
      <p>Solid Icons (decorative) <fa-icon icon="home" aria-hidden />, (informative) <fa-icon icon="heart" class="fa-2x" aria-hidden="false" title="Black Heart" /></p>
      <p>Custom Icons <fa-icon :icon="['ptdv', 'home']" /> <fa-icon :icon="['ptdv', 'heart']" /></p>
      <p>(come back to accessibility: https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility)</p>

      <hr>

      <h2>One-Offs</h2>
      <p><button class="btn" v-ptdv-scroll-to-element="'#scroll-here-example'">Click to Scroll to Below</button></p>
      <br>
      <div>Progress Bar Infinite: <div class="ptdv-progressbar" style="height: 20px"></div></div>
      <br>
      <div style="width: 25em; border: 1px solid grey;">
        <div>Truncate after two lines:</div>
        <span class="ptdv-truncate-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </div>
      <br>
      <p>Auto Focus directive <input v-ptdv-focus id="scroll-here-example"></p>
      <br>
      <p>
        Some data from a service:
        <template v-if="exampleData"><span class="text-success">{{exampleData}}</span></template>
        <template v-else>loading..</template>
      </p>
      <br>
      <p>Filter mask email: {{'pthiessen@blizzard.com' | emailMask}}</p>
      <br>

      <hr>

      <footer>
        <div id="scroll-here-example">Scrolled to here Example</div>
      </footer>
  </section>
</template>

<script>
import Vue from "vue";
import { i18n } from "../i18n";
import ExampleAPIService from '../services/example-api-service';
import PtdvFocus from '../directives/focus';
import PtdvScrollToElement from '../directives/scrollToElement';

export default {
  name: 'examples',
  directives: {
    PtdvFocus,
    PtdvScrollToElement
  },
  data() {
    return {
      loadComplete: false,
      exampleData: null
    }
  },
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
  },
  created() {
    this.getExample(123);
  },
  methods: {
    getExample(exampleId) {
      const exampleAPIService = new ExampleAPIService();
      this.loadComplete = false;

      exampleAPIService.getExample(exampleId)
        .then(resultThing => {
          if (resultThing) {
            setTimeout(() => {
              this.loadComplete = true;
              this.exampleData = resultThing.message;
            }, 2000);
          }
        });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
