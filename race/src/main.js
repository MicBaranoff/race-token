import './assets/scss/app.scss';
import 'floating-vue/dist/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import { vTooltip } from 'floating-vue';

const app = createApp(App);

app.use(createPinia());

app.directive('tooltip', vTooltip);

app.mount('#app');
