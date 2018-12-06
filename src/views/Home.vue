<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Chat-App-v3</h1>

    <p>Go to
      <router-link :to="{name: 'ChatApp', params: { id: 1 }}">Test Chat 1</router-link>
    </p>
    <p>Go to Settings
      <router-link :to="{name: 'ChatSettings'}">Chat Settings</router-link>
    </p>

    <button class="btn" v-ptdv-scroll-to-element="'#scroll-here-example'">Test</button>

    <div class="text-left">
      <span>Progress Bar Infinite:</span>
      <div class="ptdv-progressbar" style="height: 20px"></div>
    </div>

    <br/>

    <div class="text-left" style="width: 25em; border: 1px solid grey;">
      <div>Truncate after two lines:</div>
      <span class="ptdv-truncate-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
    </div>

    <br/>

    <h3>FontAwesome Icons</h3>
    Solid Icons (decorative) <fa-icon icon="home" aria-hidden />, (informative) <fa-icon icon="heart" class="fa-2x" aria-hidden="false" title="Black Heart" />
    <br />
    Custom Icons <fa-icon :icon="['ptdv', 'home']" /> <fa-icon :icon="['ptdv', 'heart']" />
    <br />
    (come back to accessibility: https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility)

    <br/>
    <br/>
    <br/>

    <h3>Some data from a service</h3>
    <div v-if="exampleData">{{exampleData}}</div>

    <br/>
    <br/>
    <br/>
    <h3>Focus directive below</h3>
    <input v-ptdv-focus id="scroll-here-example">
  </div>
</template>

<script>
import ExampleAPIService from '../services/example-api-service';
import PtdvFocus from '../directives/focus';
import PtdvScrollToElement from '../directives/scrollToElement';

export default {
  name: "home",
  components: {},
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
};
</script>
