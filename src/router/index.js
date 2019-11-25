import Vue from 'vue';
import VueRouter from 'vue-router';
import expense from './expense/index';

Vue.use(VueRouter);

console.log(expense);

const routes = [
  ...expense,
];

const router = new VueRouter({
  routes,
});

export default router;
