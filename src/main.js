// import 'es6-promise/auto';
import es6Promise from 'es6-promise';
es6Promise.polyfill();
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { routes } from './routes';
import VueParticles from 'vue-particles';
Vue.use(VueParticles);
Vue.use(VueRouter, VueAxios, axios);

// Vue.axios.defaults.headers.common['X-WP-Nonce'] = wp_api_vuejs_poc.nonce;

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		if (to.hash) {
			console.log('HASH');
			return {
			  selector: to.hash
			  // , offset: { x: 0, y: 10 }
			}
		} else {
			return { x: 0, y: 0 }
		}
	}
});

import App from './App.vue';
Vue.component( 'App', App );

new Vue({
	el: '#app',
  	router,
  	render: h => h(App)
})
