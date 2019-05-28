import Vue from 'vue';
import Router from 'vue-router';

import Layout from "../views/layout/Layout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import ('@/components/HelloWorld')
    },
    {
      path: '/headTop',
      component: Layout,
      name: 'HeadTop',
      component: () => import("@/components/HeadTop")
    }
  ]
});
