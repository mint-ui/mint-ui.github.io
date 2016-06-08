import App from './app';
import VueRouter from 'vue-router';
import LangButton from './components/lang-button.vue';
import Vue from 'vue';

const router = new VueRouter();

router.map({
  '/en': {
    component: require('./pages/en.vue')
  },
  '/zh-cn': {
    component: require('./pages/zh-cn.vue')
  }
});

let redirect = {
  '*': '/en'
};
if (navigator.language.indexOf('zh') > -1) {
  redirect = {
    '*': '/zh-cn'
  };
};

router.redirect(redirect);

Vue.component('lang-button', LangButton);

router.start(App, 'app');
