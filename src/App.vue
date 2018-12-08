<template>
  <div id="app">
    <!--
      Dynamic Classes
      <div class="a b c" :class="{'classString': truthyVar, 'classString2': truthyVar2..}">...
      -or-
      <div :class="['car', color]">...
    -->

    <nav-bar />

    <router-view />
  </div>
</template>

<script>
/**
// Component Life Cycle
  export default {
        name: 'myComponent',
        components: {
                ImportedComponent
        },
        beforeCreate() {},
        },

        // TODO use computed property wrapper to access context

        // "Note that props are validated before a component instance is created, so instance properties (e.g. data, computed, etc) will not be available inside default or validator functions."
        props: {},
        // "Vue will recursively convert its properties into getter/setters to make it “reactive”". The data object can be accessed as vm.$data
        data() {
                a: null
        },
        // Use an arrow function to get right "this" parent context
        methods: {},
        // Cached properties that update when the reative data contained changes
        // Do NOT use arrow function or "this" won't be parent component instance
        computed: {},
        // Do something with a data property changes
        watch: {
                a: function (val, oldVal) {}
        },

        // Reactive Data and events, no template or virtual DOM yet
        created() {
                // Service calls here
        },
        // el compiled into template, Use to access DOM of component
        beforeMount() {

        },
        //el added to DOM at this point
        mounted() {
        },
        // Reactive prop on component changes, get new state of component before re-rendered
        beforeUdate() {

        },
        // Changes to component DOM have been re-rendered, safest place to access property after a component change
        updated() {

        },
        // Component fully in tact, do any cleanup here like events, reactive subs..
        beforeDestroy() {},
        // Component destroyed along with any watchers and events
        destroyed()

        //NOTE ALSO: activated and deactivated. These are for keep-alive components
  }
 */
import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "scss/main.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
