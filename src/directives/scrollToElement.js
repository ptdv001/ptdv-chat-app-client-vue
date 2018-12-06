/**
 * Scrolls to an element on the page
 *
 * e.g. <button class="btn" v-ptdv-scroll-to-element="'#scroll-here-example'">Test</button>
 */
export default {
  bind(el, binding) {
    const scrollToSelector = binding.value;

    el.scrollEventListener = () => {
      const scrollToEl = document.querySelector(scrollToSelector);
      if (scrollToEl) {
        scrollToEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        //window.scrollBy(0, 0); //x, y use to offset
      }
    }

    el.addEventListener('click', el.scrollEventListener);
  },
  unbind(el) {
    el.removeEventListener('click', el.scrollEventListener);
  }
}
