import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// For persistant state (e.g. storing session state in local browser memory)
// see the plugin: vuex-persistedstate

export default new Vuex.Store({
  state: {
    userStatus: null
  },
  mutations: {
    setUserStatus(state, newStatus) {
      state.userStatus = newStatus;
    }
  },
  actions: {

  }
})
