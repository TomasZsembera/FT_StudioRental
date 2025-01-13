import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServiceView from '../views/ServiceView.vue';
import OptionsView from '../views/OptionsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/service/:slug',
    name: 'service',
    component: ServiceView,
  },
  {
    path: '/service/:slug/options/:optionId',
    name: 'options',
    component: OptionsView,
    props: route => ({ slug: route.params.slug, optionsSlug: route.params.optionId })
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;