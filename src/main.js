import Vue from 'vue';
import routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faEnvelope, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHeart, faEnvelope, faLanguage, faGithub, faLinkedinIn, faVuejs);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute];
      console.log('./screens/' + matchingView + '.vue');
      return matchingView ? require('./pages/' + matchingView + '.vue') : require('./pages/404.vue');
    },
  },
  render (h) {
    console.log(this.ViewComponent);
    return h(this.ViewComponent)
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
