import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import store from './store';

const KAKAKO_API_KEY = '6377b318ba084f4dc071a73fa50218cd';
window.Kakao.init(KAKAKO_API_KEY);
const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
