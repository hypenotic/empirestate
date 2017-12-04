import Home 	from './components/Home.vue';
import About 	from './components/About.vue';
import Services from './components/Services.vue';
import Process 	from './components/Process.vue';
import Contact 	from './components/Contact.vue';
import Blog 	from './components/blog/Blog.vue';

export const routes = [
	// ==== DEV ====
	{ path: '', component: Home, props: true },
	{ path: '/', component: Home, props: true },
	{ path: '/about', component: About, props: true },
	{ path: '/services', component: Services, props: true },
	{ path: '/process', component: Process, props: true },
	{ path: '/contact', component: Contact, props: true },
	{ path: '/blog', component: Blog, props: true },
	{ path: '*', redirect: '/esc' },
	// ==== HYPE ====
	{ path: '/esc', component: Home, props: true },
	{ path: '/esc/about', component: About, props: true },
	{ path: '/esc/services', component: Services, props: true },
	{ path: '/esc/process', component: Process, props: true },
	{ path: '/esc/contact', component: Contact, props: true },
	{ path: '/esc/blog', component: Blog, props: true }
];