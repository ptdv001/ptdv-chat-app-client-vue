import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Chats from './views/Chats.vue';
import Chat from './views/Chat.vue';
import TempExamples from './views/TempExamples';

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
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (settings.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    },
    {
      path: '/chats',
      name: 'chats',
      component: Chats
    },
    {
      path: '/chat/:id',
      name: 'chat',
      component: Chat
      // children: [
      //   // More specific to less, so order matters
      //   {
      //     path: 'settings',
      //     name: 'ChatSettings',
      //     component: () => import('./components/ChatSettings.vue')
      //   },
      //   {
      //     path: ':id',
      //     name: 'ChatApp',
      //     component: () => import('./components/ChatApp.vue')
      //   }
      // ]
    },
    {
      path: '/temp-examples',
      name: 'temp-examples',
      component: TempExamples
    }
  ]
})
