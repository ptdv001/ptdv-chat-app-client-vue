<template>
  <section class="examples">
      <h1>Examples {{route}}</h1>
      <p>A temporary page for temporary examples the should be moved to chat components once a related on exists.</p>

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

      <hr>

      <footer>
        <div id="scroll-here-example">Scrolled to here Example</div>
      </footer>
  </section>
</template>

<script>
import PtdvScrollToElement from '../directives/scrollToElement';

export default {
  name: 'temp-examples',
  directives: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
