import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import Examples from './views/Examples';
import Settings from './views/Settings';

// Lazy loaded component pages below fail at path resolution run time
// when stored in a variable for some reason..

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/chat',
      component: Chat,
      children: [
        // More specific to less, so order matters
        {
          path: 'settings',
          name: 'ChatSettings',
          component: () => import('./components/ChatSettings.vue')
        },
        {
          path: ':id',
          name: 'ChatApp',
          component: () => import('./components/ChatApp.vue')
        }
      ]
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/examples',
      name: 'examples',
      component: Examples
    }
  ]
})
