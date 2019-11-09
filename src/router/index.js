import Vue from 'vue';
import VueRouter from 'vue-router';
import SelfIntrodude from '@/views/SelfIntrodude.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SelfIntrodude',
    component: SelfIntrodude
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
