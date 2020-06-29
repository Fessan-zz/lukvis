/* eslint-disable consistent-return */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/l-main.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/l-about.vue'),
  },
  {
    path: '*',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/succes',
    name: 'succesClaim',
    component: () => import('../views/succesClaim.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/l-product.vue'),
    props: true,
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../views/l-serv.vue'),
    props: true,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

export default router;
