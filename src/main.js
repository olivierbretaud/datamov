import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css' ;

import DisplaySearch from './components/DisplaySearch.vue'
import Search from './components/Search.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false;

Vue.use(VueRouter)

const routes = [
	{path: "/displaySearch", component: DisplaySearch},
	{path: "/", component: Search}
]

const router =  new VueRouter({
	routes
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
