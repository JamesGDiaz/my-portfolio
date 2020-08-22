import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

import App from './App';
import routes from './routes';

import messages from './locales/messages';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faEnvelope, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(VueRouter);
Vue.use(VueI18n);

library.add(faHeart, faEnvelope, faLanguage, faGithub, faLinkedinIn, faVuejs);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes,
});

const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages,
});

const app = new Vue({ router, i18n, render: h => h(App) }).$mount('#app');
