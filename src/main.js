import { createApp } from 'vue';
import App from './App.vue';

// import router
import router from './router';

// import store
import store from './store';

// import global styles
import './assets/scss/main.scss';

createApp(App).use(store).use(router).mount('#app');
