import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Home1 from '../views/Home1.vue';
import expense from './expense/index';

Vue.use(VueRouter);

console.log(expense);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '123',
    name: '123',
    component: Home1
  },
  ...expense,
];

const router = new VueRouter({
  routes,
});

export default router;
