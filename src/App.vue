<template>
    <div>
        <div class="uk-container uk-container-expand nav-container">
            <app-nav v-bind:menu-links="menuLinks"></app-nav>
        </div>
        <transition name="fade">
            <router-view :page-list="pages"></router-view>
        </transition>   
    </div>
</template>

<script>
    import axios from 'axios';
    import VueAxios from 'vue-axios';
	import Nav from './components/Nav.vue';
    export default {
        components: {
            appNav: Nav
        },
        data: function () {
            return {
                menuLinks: [],
                pages: [],
                homePage: [],
                aboutPage: []    
            }
        },
        beforeMount() {
            this.getMenu();
            this.getPages();
        },
        mounted: function() {
            
        },
        computed: {
            isLoaded: function() {
                if (this.hasOwnProperty('pages')
                    && this.pages.length > 0) {
                    return true;
                }
                return false;
            }
        },
        methods: {
            getMenu: function() {
              var app = this

              axios.get('http://dev.hypenotic.com/cms-empire/wp-json/wp-api-menus/v2/menus/2')
              .then(function (response) {
                app.menuLinks = response.data.items;
                console.log(response.data);
              })
              .catch(function (error) {
                console.log(error)
              })
            },
            getPages: function() {
              var app = this
              // DEV
              // axios.get('http://cms.empire.dev/wp-json/wp/v2/pages?_embed')
              // HYPE
              axios.get('http://dev.hypenotic.com/cms-empire/wp-json/wp/v2/pages?_embed')
              .then(function (response) {
                app.pages = response.data;
                for (let page of response.data) {
                    console.log(page.slug);
                    if (page.slug == 'home') {
                        console.log('found it');
                        app.homePage = page;
                        break;
                    }
                };
                // console.log(response.data);
              })
              .catch(function (error) {
                console.log(error)
              })
            }
        }
    }
</script>

<style>
*, :after, :before {
box-sizing: border-box;
}

html, body {
height: 100%;
}

body {
margin: 0;
/* background: #34393f; */
}

.nav-container {
    position: relative;
    z-index: 500;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .2s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
