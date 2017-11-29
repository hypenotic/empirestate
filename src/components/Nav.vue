<template>
	<nav class="uk-navbar">
		<div class="uk-navbar-left">
			<router-link to="/">Insert Logo Here</router-link>
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

// to="/dev/empire/"
// :to="`/dev/empire/${link.object_slug}`"

<script>
    import axios from 'axios';
    import VueAxios from 'vue-axios';
    export default {
    	props: ['menuLinks'],
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