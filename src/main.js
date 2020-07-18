import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Nuevo proyecto 18/07/2020 Ensayo 2 prueba SENCE José Rubén Cerrada

import 'bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

//import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import accounting from 'accounting';
import JwPagination  from 'jw-vue-pagination';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.filter('formato',(monto)=> {
  accounting.formatMoney(monto, '',0,'.',',')
});

Vue.filter('mayuscula',(texto)=>{
  return texto.toUpperCase();
} )

Vue.filter('recorte',(texto)=>{
  return texto.substring(0,100)+'...';
})


Vue.component('jw-pagination', JwPagination);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
