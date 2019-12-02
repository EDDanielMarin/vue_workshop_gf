import Vue from 'vue'
import App from './App.vue'
import store from './store'

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import Button from 'primevue/button';
import DataView from 'primevue/dataview';
import ProgressSpinner from 'primevue/progressspinner';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import Card from 'primevue/card';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Message from 'primevue/message';


Vue.config.productionTip = false
Vue.component('Button', Button);
Vue.component('DataView', DataView);
Vue.component('Paginator', Paginator);
Vue.component('ProgressSpinner', ProgressSpinner);
Vue.component('Panel', Panel);
Vue.component('Card', Card);
Vue.component('DataViewLayoutOptions', DataViewLayoutOptions);
Vue.component('Message', Message);


import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
Vue.use(axios);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
