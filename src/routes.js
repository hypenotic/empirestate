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
	// { path: '/services', component: Services, props: true },
	// { path: '/process', component: Process, props: true },
	{ path: '/contact', component: Contact, props: true },
	{ path: '/blog', component: Blog, props: true },
	{ path: '', component: Home, props: true },
	{ path: '/', component: Home, props: true },
	{ path: '*', redirect: '/' }
	// ==== HYPE ====
	// { path: '/esc', component: Home, props: true },
	// { path: '/esc/about', component: About, props: true },
	// { path: '/esc/services', component: Services, props: true },
	// { path: '/esc/process', component: Process, props: true },
	// { path: '/esc/contact', component: Contact, props: true },
	// { path: '/esc/blog', component: Blog, props: true }
];