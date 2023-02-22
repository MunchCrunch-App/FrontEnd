import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/HomeView.vue';
import SearchView from '@/views/home/SearchView.vue';
import SmallCategoryView from '@/views/home/SmallCategoryView.vue';
import CategoryShopViewVue from '@/views/CategoryShopView.vue';
import MyPickViewVue from '@/views/MyPickView.vue';
import MyPageViewVue from '@/views/mypage/MyPageView.vue';
import BasicInfoViewVue from '@/views/mypage/BasicInfoView.vue';
import EditProfileViewVue from '@/views/mypage/EditProfileView.vue';
import EditAddressViewVue from '@/views/mypage/EditAddressView.vue';
import AddAddressViewVue from '@/views/mypage/AddAddressView.vue';
import TeamPurchaseProcessViewVue from '@/views/mypage/TeamPurchaseProcessView.vue';
import DeliverProcessViewVue from '@/views/mypage/DeliverProcessView.vue';
import DeliverFinishViewVue from '@/views/mypage/DeliverFinishView.vue';
import OrderDetailViewVue from '@/views/mypage/OrderDetailView.vue';
import WriteReviewViewVue from '../views/mypage/WriteReviewView.vue';
import RefundViewVue from '../views/mypage/RefundView.vue';

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
            component: CategoryShopViewVue,
        },
        {
            path: '/mypick',
            name: 'mypick',
            component: MyPickViewVue,
        },
        {
            path: '/mypage',
            name: 'mypage',
            component: MyPageViewVue,
        },
        {
            path: '/mypage/basic-info',
            name: '/mypage/basic-info',
            component: BasicInfoViewVue,
        },
        {
            path: '/mypage/edit-profile',
            name: '/mypage/edit-profile',
            component: EditProfileViewVue,
        },
        {
            path: '/mypage/edit-address',
            name: '/mypage/edit-address',
            component: EditAddressViewVue,
        },
        {
            path: '/mypage/add-address',
            name: '/mypage/add-address',
            component: AddAddressViewVue,
        },
        {
            path: '/mypage/team-purchase-process',
            name: '/mypage/team-purchase-process',
            component: TeamPurchaseProcessViewVue,
        },
        {
            path: '/mypage/deliver-process',
            name: '/mypage/deliver-process',
            component: DeliverProcessViewVue,
        },
        {
            path: '/mypage/deliver-finish',
            name: '/mypage/deliver-finish',
            component: DeliverFinishViewVue,
        },
        {
            path: '/mypage/order-detail/:id',
            name: '/mypage/order-detail/:id',
            component: OrderDetailViewVue,
        },
        {
            path: '/mypage/write-review/:id',
            name: '/mypage/write-review/:id',
            component: WriteReviewViewVue,
        },
        {
            path: '/mypage/refund/:id',
            name: '/mypage/refund/:id',
            component: RefundViewVue,
        },
    ],
});

export default router;
