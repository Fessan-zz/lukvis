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
    // eslint-disable-next-line no-undef
    component: () => import('../views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
