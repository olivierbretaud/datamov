import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css' ;

import DisplayAudio from './components/DisplayAudio.vue'
import DisplaySearch from './components/DisplaySearch.vue'
import Search from './components/Search.vue'
import Home from './components/Home.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false;

Vue.use(VueRouter)

const routes = [
	{path: "/displayAudio", component: DisplayAudio},
	{path: "/displaySearch", component: DisplaySearch},
	{path: "/search", component: Search},
	{path: "/", component: Home}
]

const router =  new VueRouter({
	routes
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
