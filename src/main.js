import Vue from 'vue'
import VueMoment from 'vue-moment';
import { i18n } from './i18n';

// TODO
// Update style-guide lib to use modules and IFFEs fallback (rollup builder)
import '../node_modules/ptdv-style-guide/dist/ptdv-fontawesome.js'; // Global temp var PTDV_CUSTOM_ICONS in below
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';

import './filters';

library.add(far, fas, PTDV_CUSTOM_ICONS);
Vue.component('fa-icon', FontAwesomeIcon)

// Would be global if added here but can also do component import e.g. in Home.vue
// import FocusDirective from './directives/focus';
// Vue.directive('ptdv-focus', FocusDirective);

router.beforeEach((to, from, next) => {
  //i18n set by query param
  if (to.query && to.query.locale) {
    i18n.locale = to.query.locale;
  }

  //TODO probably move to the auth workflow
  next();
});

Vue.use(VueMoment);

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
