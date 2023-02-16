import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/HomeView.vue';
import SearchView from '@/views/home/SearchView.vue';
import SmallCategoryView from '@/views/home/SmallCategoryView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/search',
            name: 'search',
            component: SearchView,
        },
        {
            path: '/:smallCategory',
            name: 'smallCategory',
            component: SmallCategoryView,
            props: true,
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
