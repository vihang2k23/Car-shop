import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import vuetify from './plugins/vuetify'

import { ValidationProvider } from 'vee-validate';
Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
export const bus = new Vue()
new Vue({
  

  store,
  vuetify,
  render: h => h(App),
  router,
  watch:{
    '$route' (to) {
       if(to.currentRoute.meta.reload==true){window.location.reload()}
  }
}
}).$mount('#app')
