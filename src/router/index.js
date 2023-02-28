import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/HomeView.vue';
import SearchView from '@/views/home/SearchView.vue';
import SmallCategoryView from '@/views/home/SmallCategoryView.vue';
import CategoryShopViewVue from '@/views/categoryshop/CategoryShopView.vue';
import MyPickViewVue from '@/views/mypick/MyPickView.vue';
import MyPageViewVue from '@/views/mypage/MyPageView.vue';
import BasicInfoViewVue from '@/views/mypage/BasicInfoView.vue';
import EditProfileViewVue from '@/views/mypage/EditProfileView.vue';
import EditAddressViewVue from '@/views/mypage/EditAddressView.vue';
import AddAddressViewVue from '@/views/mypage/AddAddressView.vue';
import TeamPurchaseProcessViewVue from '@/views/mypage/TeamPurchaseProcessView.vue';
import DeliverProcessViewVue from '@/views/mypage/DeliverProcessView.vue';
import DeliverFinishViewVue from '@/views/mypage/DeliverFinishView.vue';
import OrderDetailViewVue from '@/views/mypage/OrderDetailView.vue';
import WriteReviewViewVue from '@/views/mypage/WriteReviewView.vue';
import RefundViewVue from '@/views/mypage/RefundView.vue';
import CategoryShopListViewVue from '@/views/categoryshop/CategoryShopListView.vue';
import ReviewManagementViewVue from '@/views/mypage/ReviewManagementView.vue';
import CustomerQuestionViewVue from '@/views/mypage/CustomerQuestionView.vue';
import WriteQuestionViewVue from '@/views/mypage/WriteQuestionView.vue';
import QuestionListViewVue from '@/views/mypage/QuestionListView.vue';
import FrequentlyAskedQuestionViewVue from '@/views/mypage/FrequentlyAskedQuestionView.vue';
import RefundListViewVue from '@/views/mypage/RefundListView.vue';
import SettingViewVue from '@/views/mypage/SettingView.vue';
import PrivacyViewVue from '@/views/mypage/PrivacyView.vue';
import TermsOfUseViewVue from '@/views/mypage/TermsOfUseView.vue';
import DetailViewVue from '@/views/etc/DetailView.vue';
import ReviewListViewVue from '@/views/etc/ReviewListView.vue';
import ProductQuestionListViewVue from '@/views/etc/ProductQuestionListView.vue';
import WriteProductQuestionViewVue from '@/views/etc/WriteProductQuestionView.vue';
import OrderPaymentViewVue from '@/views/etc/Order&PaymentView.vue';
import PaymentMethodViewVue from '@/views/etc/PaymentMethodView.vue';
import TeamOrderFinishViewVue from '@/views/etc/TeamOrderFinishView.vue';
import SoloOrderFinishViewVue from '@/views/etc/SoloOrderFinishView.vue';

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
            path: '/categoryshop/list/:category/:subcategory',
            name: '/categoryshop/list/:category/:subcategory',
            component: CategoryShopListViewVue,
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
        {
            path: '/mypage/review-management',
            name: '/mypage/review-management',
            component: ReviewManagementViewVue,
        },
        {
            path: '/mypage/customer-question',
            name: '/mypage/customer-question',
            component: CustomerQuestionViewVue,
        },
        {
            path: '/mypage/write-question',
            name: '/mypage/write-question',
            component: WriteQuestionViewVue,
        },
        {
            path: '/mypage/question-list',
            name: '/mypage/question-list',
            component: QuestionListViewVue,
        },
        {
            path: '/mypage/frequently-asked-question',
            name: '/mypage/frequently-asked-question',
            component: FrequentlyAskedQuestionViewVue,
        },
        {
            path: '/mypage/refund-list',
            name: '/mypage/refund-list',
            component: RefundListViewVue,
        },
        {
            path: '/mypage/setting',
            name: '/mypage/setting',
            component: SettingViewVue,
        },
        {
            path: '/mypage/privacy',
            name: '/mypage/privacy',
            component: PrivacyViewVue,
        },
        {
            path: '/mypage/terms-of-use',
            name: '/mypage/terms-of-use',
            component: TermsOfUseViewVue,
        },
        {
            path: '/detail/:id',
            name: '/detail/:id',
            component: DetailViewVue,
        },
        {
            path: '/review-list/:id',
            name: '/review-list/:id',
            component: ReviewListViewVue,
        },
        {
            path: '/product-question-list/:id',
            name: '/product-question-list/:id',
            component: ProductQuestionListViewVue,
        },
        {
            path: '/write-product-question/:id',
            name: '/write-product-question/:id',
            component: WriteProductQuestionViewVue,
        },
        {
            path: '/order-payment/:id',
            name: '/order-payment/:id',
            component: OrderPaymentViewVue,
        },
        {
            path: '/payment-method',
            name: '/payment-method',
            component: PaymentMethodViewVue,
        },
        {
            path: '/team-order-finish',
            name: '/team-order-finish',
            component: TeamOrderFinishViewVue,
        },
        {
            path: '/solo-order-finish',
            name: '/solo-order-finish',
            component: SoloOrderFinishViewVue,
        },

        ,
    ],
});

export default router;
