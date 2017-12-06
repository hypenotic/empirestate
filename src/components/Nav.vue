<template>
<div v-if="scrolled == true" id="scrolling" class="nav-background">
	<div class="nav-container">
		<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
			<nav class="uk-navbar light-nav" v-if="$route.path == '/'">
				<div class="uk-navbar-left">
					<router-link v-if="$route.path !== '/'" to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
					<router-link v-else to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav" v-if="$route.path == '/'">
						<li v-for="link in menuLinks" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` !== 'home'" :to="`/${link.object_slug}`">
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
					</ul>
					<ul v-else class="uk-navbar-nav">
						<li v-for="link in menuLinks" :key="`menu-item-${link.object_slug}`">
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
						<li v-for="link in menuLinks" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` !== 'home'" :to="`/${link.object_slug}`">
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
					</ul>
					<ul v-else class="uk-navbar-nav">
						<li v-for="link in menuLinks" :key="`menu-item-${link.object_slug}`">
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
					</ul>
				</div>
			</nav>
		</div>
	</div>
</div>
<div v-else class="nav-background">
	<div class="nav-container">
		<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
			<nav class="uk-navbar dark-nav" v-if="$route.path == '/news'">
				<div class="uk-navbar-left">
					<router-link v-if="$route.path !== '/news'" to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
					<router-link v-else to="/"><img src="../assets/empire_state_logo_green.png" alt="Empire State Connector" class="nav-logo"></router-link>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav" v-if="$route.path == '/'">
						<li v-for="link in menuLinks" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` !== 'home'" :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
					</ul>
					<ul v-else class="uk-navbar-nav">
						<li v-for="link in menuLinks" :key="`menu-item-${link.object_slug}`">
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
						<li v-for="link in menuLinks" :key="`menu-item-${link.object_slug}`">
							<router-link v-if="`${link.object_slug}` !== 'home'" :to="`/${link.object_slug}`">
								{{ link.title }}
							</router-link>
							<span></span>
						</li>
					</ul>
					<ul v-else class="uk-navbar-nav">
						<li v-for="link in menuLinks" :key="`menu-item-${link.object_slug}`">
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
					</ul>
				</div>
			</nav>
		</div>
	</div>
</div>
</template>

<script>
    import axios from 'axios';
    import VueAxios from 'vue-axios';
    export default {
    	props: ['menuLinks','menuColor'],
        data: function () {
            return {
				// menuLinks: [] 
				scrolled: false
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
}

.nav-background {
	transition: all 0.5s ease;
	background: transparent;
}

.nav-background#scrolling {
	background: $white;
	background: $green;
	// display: fixed;
	width: 100%;
	height: 80px;
	// position: absolute;
	// height: 40px;
	position: fixed;
	z-index: 4000;
}

.uk-navbar-left .nav-logo {
	transition: all 0.3s ease;
	max-height: 70px;
	width: auto;
	display: block;
	margin-top: 20px;
}

#scrolling {
	.uk-navbar-left .nav-logo {
		max-height: 50px;
		margin-top: 0px;
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
			span {
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
}

.uk-navbar.dark-nav{
	.uk-navbar-right {
		li span {
			background-color: rgba(0,0,0,0.3);
		}
	}
}

</style>
