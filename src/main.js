import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import vuetify from './plugins/vuetify'
import "../src/vee-validate/vee-validate"

import { ValidationProvider,ValidationObserver } from 'vee-validate';
Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver',ValidationObserver)

export const bus = new Vue()
new Vue({
  

  store,
  vuetify,
  render: h => h(App),
  router,
  

}).$mount('#app')
