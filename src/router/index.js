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
            component: () => import('../views/mypage/MyPageView.vue'),
        },
        {
            path: '/mypage/basic-info',
            name: '/mypage/basic-info',
            component: () => import('../views/mypage/BasicInfoView.vue'),
        },
        {
            path: '/mypage/edit-profile',
            name: '/mypage/edit-profile',
            component: () => import('../views/mypage/EditProfileView.vue'),
        },
        {
            path: '/mypage/edit-address',
            name: '/mypage/edit-address',
            component: () => import('../views/mypage/EditAddressView.vue'),
        },
    ],
});

export default router;
