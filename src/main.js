import Vue from 'vue'
import VueMoment from 'vue-moment';
import { i18n } from './i18n';

import App from './App.vue';
import router from './router';
import store from './store';

import './filters';

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
