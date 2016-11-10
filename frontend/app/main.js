require('./styles/main.scss');

import Vue from 'vue';
import VueRouter from 'vue-router';

function createRouter() {
  function route(path, name) {
    return { name: name, path: path, component: require(`./pages/${name}.vue`) };
  }
  const routes = [
    route('/', 'index'),
    route('/signin', 'signin'),
    route('/signup', 'signup'),
    route('/signout', 'signout'),
    route('/apps', 'apps'),
    route('/devices', 'devices')
  ];
  return new VueRouter({ routes, mode: 'history' });
}

Vue.use(VueRouter);

window.onload = () => {
  const router = createRouter();
  router.beforeEach((nextPage, _, done) => {
    document.body.dataset.pageName = nextPage.name;
    done();
  });
  new Vue({ router }).$mount('#app');
};
