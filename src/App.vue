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
                    <!-- SVG sprite -->
                    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;">
                        <defs>
                            <symbol id="loopingPath" viewBox="0 0 147.5 68">
                                <title>Loading</title>
                            <path d="M94.65,14a27.5,27.5,0,1,1-.17,39.88L52.93,14.06a27.5,27.5,0,1,0,.12,39.77Z" fill="none" stroke-miterlimit="10"/>
                            </symbol>
                        </defs>
                    </svg>

                    <!-- Display SVG fragment -->
                    <svg class="loading-spinner">
                        <use id="background" xlink:href="#loopingPath"/>
                        <use id="master" xlink:href="#loopingPath"/>
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

.non-home-container {
    margin-top: 40px !important;
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

.loading-animation {
    // width: 100vw;
    // height: 100vh;
    // position: absolute;
    background: white;
    text-align: center;
    padding-top: 20%; 
}

$stroke-width: 13;
$stroke-linecap: round; 
$looping-color: #e3e3e3;
$looping-bg: rgba(0,0,0,.25);

$total-duration: 1.5s;
$total-length: 371.68328857421875;
$looping-percent: 40;


$looping-length: ($looping-percent * $total-length) / 100;

.loading-spinner {
	[id="master"], [id="background"] {
		stroke-width: $stroke-width;
		stroke-linecap: $stroke-linecap;
	}
	[id="background"] {
		stroke: $looping-bg;
	}
	[id="master"] {
		stroke: $looping-color;
		stroke-dasharray: $looping-length, ($total-length - $looping-length);
		animation: loading-loop $total-duration linear infinite;
	}
}

@keyframes loading-loop {
	from { stroke-dashoffset: 0px; }
	to   { stroke-dashoffset: #{- $total-length}px; } 
}

</style>
