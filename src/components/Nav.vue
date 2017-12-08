<template>
<!-- Why don't I just do a check for home... -->
<div v-if="scrolled == true" id="scrolling" class="nav-background" v-bind:class="{ 'menu-open': showMobileMenu }">
	<div id="mobile-menu-trigger" v-on:click="showMobileMenu = !showMobileMenu">
		<i class="fa fa-bars" aria-hidden="true"></i>
	</div>
	<div class="nav-container">
		<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
			<nav class="uk-navbar light-nav" v-if="$route.path == '/'">
				<div class="uk-navbar-left">
					<router-link v-if="$route.path !== '/'" to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
					<router-link v-else to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav" v-if="$route.path == '/'">
						<li v-for="link in menuLinks" v-if="`${link.object_slug}` !== 'esc-solicitation'" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` == 'contact'" :to="'#footer-anchor'">
								{{ link.title }}
							</router-link>
							<router-link v-else-if="`${link.object_slug}` !== 'home'" :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<router-link v-else to="/">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
						<li v-else :key="`menu-item-${link.object_slug}`">
							<a :href="link.url" target="_blank" class="external-link external-link--hide">
								{{ link.title }}
							</a>
							<span></span>
						</li>

					</ul>
					<ul v-else class="uk-navbar-nav">
						<li v-for="link in menuLinks" v-if="`${link.object_slug}` !== 'esc-solicitation'" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` == 'contact'" :to="'#footer-anchor'">
							{{ link.title }}
							</router-link>
							<router-link v-else-if="`${link.object_slug}` == 'home'" to="/">
								{{ link.title }}
							</router-link>
							<router-link v-else :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
						<li v-else :key="`menu-item-${link.object_slug}`">
							<a :href="link.url" target="_blank" class="external-link">
								{{ link.title }}
							</a>
							<span></span>
						</li>
					</ul>
				</div>
			</nav>
			<nav v-else class="uk-navbar light-nav">
				<div class="uk-navbar-left">
					<router-link v-if="$route.path !== '/'" to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
					<router-link v-else to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav" v-if="$route.path == '/'">
						<li v-for="link in menuLinks" v-if="`${link.object_slug}` !== 'esc-solicitation'" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` == 'contact'" :to="'#footer-anchor'">
								{{ link.title }}
							</router-link>
							<router-link v-else-if="`${link.object_slug}` !== 'home'" :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<router-link v-else to="/">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
						<li v-else :key="`menu-item-${link.object_slug}`">
							<a :href="link.url" target="_blank" class="external-link external-link--hide">
								{{ link.title }}
							</a>
							<span></span>
						</li>
					</ul>
					<ul v-else class="uk-navbar-nav">
						<li v-for="link in menuLinks" v-if="`${link.object_slug}` !== 'esc-solicitation'" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` == 'contact'" :to="'#footer-anchor'">
							{{ link.title }}
							</router-link>
							<router-link v-else-if="`${link.object_slug}` == 'home'" to="/">
								{{ link.title }}
							</router-link>
							<router-link v-else :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
						<li v-else :key="`menu-item-${link.object_slug}`">
							<a :href="link.url" target="_blank" class="external-link">
								{{ link.title }}
							</a>
							<span></span>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</div>
<div v-else class="nav-background" v-bind:class="{ 'menu-open': showMobileMenu }">
	<div id="mobile-menu-trigger" v-on:click="showMobileMenu = !showMobileMenu">
		<i class="fa fa-bars" aria-hidden="true"></i>
	</div>
	<div class="nav-container">
		<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
			<nav class="uk-navbar dark-nav" v-if="$route.path == '/news'">
				<div class="uk-navbar-left">
					<router-link v-if="$route.path !== '/news'" to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
					<router-link v-else to="/"><img src="../assets/empire_state_logo_black.png" alt="Empire State Connector" class="nav-logo"></router-link>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav" v-if="$route.path == '/'">
						<li v-for="link in menuLinks" v-if="`${link.object_slug}` !== 'esc-solicitation'" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` == 'contact'" :to="'#footer-anchor'">
							{{ link.title }}
							</router-link>
							<router-link v-else-if="`${link.object_slug}` == 'home'" to="/">
								{{ link.title }}
							</router-link>
							<router-link v-else :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
						<li v-else :key="`menu-item-${link.object_slug}`">
							<a :href="link.url" target="_blank" class="external-link external-link--hide">
								{{ link.title }}
							</a>
							<span></span>
						</li>
					</ul>
					<ul v-else class="uk-navbar-nav">
						<li v-for="link in menuLinks" v-if="`${link.object_slug}` !== 'esc-solicitation'" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` == 'home'" to="/" >
							{{ link.title }}
							</router-link>
							<router-link v-else-if="`${link.object_slug}` == 'contact'" :to="'#footer-anchor'">
								{{ link.title }}
							</router-link>
							<router-link v-else :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
						<li v-else :key="`menu-item-${link.object_slug}`">
							<a :href="link.url" target="_blank" class="external-link">
								{{ link.title }}
							</a>
							<span></span>
						</li>
					</ul>
				</div>
			</nav>
			<nav v-else class="uk-navbar light-nav">
				<div class="uk-navbar-left">
					<router-link v-if="$route.path !== '/'" to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
					<router-link v-else to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav" v-if="$route.path == '/'">
						<li v-for="link in menuLinks" v-if="`${link.object_slug}` !== 'esc-solicitation'" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` == 'contact'" :to="'#footer-anchor'">
							{{ link.title }}
							</router-link>
							<router-link v-else-if="`${link.object_slug}` == 'home'" to="/">
								{{ link.title }}
							</router-link>
							<router-link v-else :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
						<li v-else :key="`menu-item-${link.object_slug}`">
							<a :href="link.url" target="_blank" class="external-link external-link--hide">
								{{ link.title }}
							</a>
							<span></span>
						</li>
					</ul>
					<ul v-else class="uk-navbar-nav">
						<li v-for="link in menuLinks" v-if="`${link.object_slug}` !== 'esc-solicitation'" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` == 'home'" to="/" >
							{{ link.title }}
							</router-link>
							<router-link v-else-if="`${link.object_slug}` == 'contact'" :to="'#footer-anchor'">
								{{ link.title }}
							</router-link>
							<router-link v-else :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
						<li v-else :key="`menu-item-${link.object_slug}`">
							<a :href="link.url" target="_blank" class="external-link">
								{{ link.title }}
							</a>
							<span></span>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</div>
</template>

<script>
    // import axios from 'axios';
    // import VueAxios from 'vue-axios';
    export default {
    	props: ['menuLinks','menuColor'],
        data: function () {
            return {
				// menuLinks: [] 
				scrolled: false,
				showMobileMenu: false
            }
		},
        methods: {
			handleScroll: function (event) {
				// console.log(window.scrollY);
				if (window.scrollY > 20) {
					this.scrolled = true;
				} else {
					this.scrolled = false;	
				}
			}
		},
		created: function () {
			window.addEventListener('scroll', this.handleScroll);
		},
		destroyed: function () {
			window.removeEventListener('scroll', this.handleScroll);
		},
		computed: {
			contactCheck: function (slug) {
				// this.menuLinks
				if (slug !== 'home' || slug == 'contact') {
					return true;
				}
			}
		}
    }
</script>

<style lang="scss" scoped>
@import '../sass/variables.scss';

nav {
	width: 100%;
	a {
		color: $main-accent;
		font-size: 0.6rem !important;
		// line-height: 0.8rem !important;
		&:hover {
			color: lighten($main-accent, 5);
		}
	}
}

#mobile-menu-trigger {
	display: none;
	&:hover {
		cursor: pointer;
	}
	i {
		color: $white;
		font-size: 30px;
	}
	@media #{$small-and-down} {
		display: block;
		position: fixed; 
		right: 30px;
		top: 15px;
		z-index: 5000000;
    }
	
}

.nav-background {
	transition: all 0.5s ease;
	background: transparent;
	@media #{$small-and-down} {
		height: 0;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 400000;
    }
}

.nav-background#scrolling {
	background: $white;
	background: $main-accent;
	// display: fixed;
	width: 100%;
	height: 80px;
	// position: absolute;
	// height: 40px;
	position: fixed;
	z-index: 4000;
	@media #{$small-and-down} {
        height: 60px;
    }
}

.nav-background.menu-open,
.nav-background.menu-open#scrolling {
	@media #{$small-and-down} {
		height: 100vh;
		width: 100%;
		background: $main-accent;
    }
}

.uk-navbar-left .nav-logo {
	transition: all 0.3s ease;
	max-height: 70px;
	width: auto;
	display: block;
	margin-top: 20px;
	@media #{$small-and-down} {
		max-height: 70px;
		margin-left: 5px;
    }
}

#scrolling {
	.uk-navbar-left .nav-logo {
		max-height: 50px;
		margin-top: 0px;
		@media #{$small-and-down} {
			max-height: 40px;
			margin-top: 10px;
		}
	}
	.uk-navbar.light-nav {
		a {
			color: rgba(0,0,0,0.2);
			color: rgba(255,255,255,1);
			&:hover {
				color: rgba(0,0,0,0.2);
				color: rgba(255,255,255,1);
			}
		}
	}
}

a.external-link {
	// color: red !important;
	border: 1px solid rgba(255,255,255,0.3);
	height: 50%;
	// vertical-align: middle;
	@media #{$small-and-down} {
		padding: 10px 0;
    }
	@media #{$medium-and-up} {
		margin-top: 15.5%;
    }
	&:hover {
		border: 1px solid $main-accent;
		background: $main-accent;
		color: $white;
	}
}

.external-link.external-link--hide {
	@media #{$medium-and-up} {
		transition: all 0.2s ease;
		position: absolute;
		right: -1000px;
    }
}

#scrolling a.external-link {
	position: relative;
	right: auto;
	&:hover {
		border: 1px solid $main-accent;
		background: $white;
		color: $main-accent !important;
	}
}

.uk-navbar.light-nav {
	a {
		color: $white;
		&:hover {
			color: $white;
		}
	}
}


.uk-navbar-right {
	li {
		text-decoration: none;
		position: relative;
		text-align: center;
		&:hover {
			a:not(.external-link) + span {
				visibility: visible;
				-webkit-transform: scaleX(1);
				transform: scaleX(1);
			}
		}
		a {
			font-family: $heading-type;
			letter-spacing: 0.7px;
		}
		a.router-link-exact-active + span {
			visibility: visible;
			-webkit-transform: scaleX(1);
			transform: scaleX(1);
		}
		span {
			$thetransition: all .3s cubic-bezier(1,.25,0,.75) 0s;
			position: absolute;
			width: 80%;
			height: 1px;
			bottom: 25px;
			left: 10%;
			background-color: $white;
			visibility: hidden;
			-webkit-transform: scaleX(0);
			transform: scaleX(0);
			-webkit-transition: $thetransition;
			transition: $thetransition;
		}
		
	}
	@media #{$small-and-down} {
		display: none;
    }
}

.uk-navbar {
	@media #{$small-and-down} {
		display: block;
	}
}

.menu-open {
	.uk-navbar-right {
		@media #{$small-and-down} {
			display: block;
			margin: 50px auto 0;;
			ul {
				display: block;
			}
			li a {
				font-size: 32px !important;
			}
		}
	}
}

.uk-navbar.dark-nav{
	.uk-navbar-right {
		li span {
			background-color: rgba(0,0,0,0.3);
		}
	}
	a.external-link {
		// color: red !important;
		border: 1px solid rgba(0,0,0,0.2);
	}
}

</style>
