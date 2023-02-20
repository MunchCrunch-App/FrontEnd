import axios from 'axios';
import { createStore } from 'vuex';
import { mockApi } from '../src/api/api';

const store = createStore({
    state() {
        return {
            productDetail: {},
        };
    },
    mutations: {
        setProduct(state, data) {
            state.more = data;
        },
    },
    actions: {
        getProductDetail({ state }, id) {
            console.log(state, id);
            mockApi.get(`detail/${id}`).then((res) => {
                console.log(res.data);
                console.log(state.productDetail);
            });
        },
    },
});

export default store;
