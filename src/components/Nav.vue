<template>
	<nav class="uk-navbar">
		<div class="uk-navbar-left">
			<router-link v-if="$route.path !== '/'" to="/"><img src="../assets/empire_state_logo_green.png" alt="Empire State Connector" class="nav-logo"></router-link>
			<router-link v-else to="/"><img src="../assets/empire_state_logo_white.png" alt="Empire State Connector" class="nav-logo"></router-link>
		</div>
		<div class="uk-navbar-right">
			<ul class="uk-navbar-nav">
				<li v-for="link in menuLinks">
					<router-link v-if="`${link.object_slug}` == 'home'" to="/">
				    {{ link.title }}
				    </router-link>
					<router-link v-else :to="`/${link.object_slug}`">
				 		{{ link.title }}
				 	</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
    import axios from 'axios';
    import VueAxios from 'vue-axios';
    export default {
    	props: ['menuLinks','menuColor'],
        data: function () {
            return {
                // menuLinks: [] 
            }
		},
        beforeCreate() {
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
.uk-navbar-left .nav-logo {
	max-height: 80px;
	width: auto;
	display: block;
	margin-top: 20px;
}
</style>
