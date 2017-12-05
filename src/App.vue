<template>
    <div>
        <div v-if="loading==false">
            <div class="uk-container uk-container-expand nav-container">
                <app-nav v-bind:menu-links="menuLinks" v-bind:menu-color="dark"></app-nav>
            </div>
            <transition name="fade">
                <router-view :page-list="pages" :load-check="loading"></router-view>
            </transition> 
        </div> 
        <div v-else>
            <transition name="fade">
                <div class="uk-container uk-container-expand loading-animation">
                      <svg width="80" height="60" viewBox="5 0 80 60"><path class="wave" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15" />
                        </svg>
                </div>
            </transition>  
        </div>
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
                loading: true,
                menuLinks: [],
                menuColor: "",
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
            // this.isLoaded();
        },
        watch: {
            loading: function (newLoading) {
                this.loading = newLoading;
            }
        },
        computed: {
            isLoaded: function() {
                if (this.hasOwnProperty('pages')
                    && this.pages.length > 0) {
                    console.log('LOADED');
                    return true;
                }
                console.log('NOT LOADED');
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
                setTimeout(function(){ app.loading = false }, 1000);
                
                // this.isLoaded();
              })
              .catch(function (error) {
                console.log(error)
              })
            }
        }
    }
</script>

<style lang="scss">
// ===== GLOBAL
@import './sass/variables.scss';

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

// LAYOUT
.nav-container {
    position: relative;
    z-index: 500;
}

.non-home-container {
    margin-top: 40px !important;
}

// TRANSITIONS
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

// LOADING ANIMATION
.loading-animation {
    // width: 100vw;
    // height: 100vh;
    // position: absolute;
    background: white;
    text-align: center;
    padding-top: 20%; 
}

.wave {
  animation: moveTheWave 2400ms linear infinite;
  stroke-dasharray: 0 16 101 16;
}

@keyframes moveTheWave {
  0% {
    stroke-dashoffset: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    stroke-dashoffset: -133;
    transform: translate3d(-90px, 0, 0);
  }
}

</style>
