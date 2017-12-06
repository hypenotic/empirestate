import Home 	from './views/Home.vue';
import Benefits from './views/Benefits.vue';
// import Services from './components/Services.vue';
// import Process 	from './components/Process.vue';
import Tech 	from './views/Tech.vue';
import Contact 	from './views/Contact.vue';
import Blog 	from './views/blog/Blog.vue';

export const routes = [
	// ==== DEV ====
	{ path: '/benefits', component: Benefits, props: true },
	{ path: '/tech', component: Tech, props: true },
	{ path: '/contact', component: Contact, props: true },
	{ path: '/blog', component: Blog, props: true },
	{ path: '/news/:slug', component: Blog, props: true },
	{ path: '/news', component: Blog, props: true },
	{ path: '', component: Home, props: true },
	{ path: '/', component: Home, props: true },
	{ path: '*', redirect: '/' }
];