import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/categoryshop',
      name: 'categoryshop',
      component: () => import('../views/CategoryShopView.vue'),
    },
    {
      path: '/mypick',
      name: 'mypick',
      component: () => import('../views/MyPickView.vue'),
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('../views/MyPageView.vue'),
    },
  ],
});

export default router;
