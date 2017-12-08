<template>
    <div class="view view--home">
        <div class="banner banner--home" :style="{ 'background-image': 'url(' + selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url + ')'}">
            <!-- <div class="home-container" :style="{ 'background-image': 'url(' + selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url + ')'}"><div></div></div> -->
            <div class="overlay"></div>
            <div class="main-banner-content uk-container uk-container-large">
                <h1 v-html="selected.meta_box.es_banner_heading"></h1>
                <h2 v-html="selected.meta_box.es_banner_subheading"></h2>
                <a v-html="selected.meta_box.es_banner_cta" class="uk-button uk-button-primary" :href="selected.meta_box.es_banner_link" target="_blank"></a>
                <!-- <the-content :body-copy="selected"></the-content> -->
                <!-- <div v-html="selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"></div> -->
                <!-- <img src="http://placehold.it/200x300"> -->
                <!-- <img :src="selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"> -->
            </div>
            <!-- <vue-particles
                v-if="browserV == false"
                color="#ffffff"
                :particleOpacity="0.2"
                linesColor="#ffffff"
                :particlesNumber="70"
                shapeType="circle"
                :particleSize="5"
                :linesWidth="2"
                :lineLinked="true"
                :lineOpacity="0.2"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
            >
            </vue-particles> -->
        </div>
        <div class="uk-container uk-container-large">
            <div v-html="selected.content.rendered" class="overview overview--home padding--top uk-padding-large"></div>
        </div>
        <div class="home__tech">
            <h3 v-html="selected.meta_box.es_home_tech_heading"></h3>
            <div>
                <div class="block--2-1 home__tech_image">
                    <img :src="selected.meta_box.es_home_tech_img" alt="">
                </div>
                <div v-html="selected.meta_box.es_home_tech_over" class="block--2-1 home__tech_overview">

                </div>
            </div>
        </div>
        <div class="uk-container uk-padding-large uk-container-large home__tech_buckets">
            <div>
                <ul>
                    <li v-for="bucket in selected.meta_box.es_home_tech_buckets" :key="bucket['es_home_tb_title']">
                        <h4 v-html="bucket['es_home_tb_title']"></h4>
                        <div v-html="bucket['es_home_tb_copy']"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="uk-container home__quick-facts">
            <h3 v-html="selected.meta_box.es_home_qf_heading"></h3>
            <ul>
                <li v-for="fact in selected.meta_box.es_fact_list" :key="fact['es_fact_item_title']">   
                    <div>
                        <h4 v-html="fact['es_fact_item_title']"></h4>
                        <div v-html="fact['es_fact_item_copy']"></div>
                    </div>
                </li>
            </ul>
        </div>

        <app-footer></app-footer>
    </div>
    <!-- <div v-else class="uk-container uk-container-expand home-component">LOADING</div> -->
</template>

<script>
    import Content from '../components/content.vue';
    import Footer from '../components/Footer.vue';
    export default {
        components: {
            theContent: Content,
            appFooter: Footer,
        },
        data: function () {
            return {
                selected: [],
                featImage:"",
                browserV: false
            }
        },
        props: ['pageList', 'loadCheck'],
        created: function() {
            console.log('home');
            this.getBrowser();
            this.getPage(this.pageList);
        },
        watch: {
            selected: function ( newVal ) {
                this.selected = newVal;
            }
        },
        methods: {
            getBrowser: function() {
                var ua = window.navigator.userAgent;

                // Test values; Uncomment to check result …

                // IE 10
                // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
                
                // IE 11
                // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
                
                // Edge 12 (Spartan)
                // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
                
                // Edge 13
                // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

                var msie = ua.indexOf('MSIE ');
                if (msie > 0) {
                    // IE 10 or older => return version number
                    // return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                    console.log('IE10 LESS');
                    this.browserV = true;
                }

                var trident = ua.indexOf('Trident/');
                if (trident > 0) {
                    // IE 11 => return version number
                    var rv = ua.indexOf('rv:');
                    // return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
                    console.log('IE11');
                    this.browserV = true;
                }

                var edge = ua.indexOf('Edge/');
                if (edge > 0) {
                    // Edge (IE 12+) => return version number
                    // return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
                    console.log('EDGE');
                    this.browserV = false;
                }

                // other browser
                // return false;
                console.log('OTHER');
                this.browserV = false;
            },
            getPage(pages) {
                for (let page of pages) {
                    // console.log(page.slug);
                    if (page.slug == 'home') {
                        console.log('found it');
                        // console.log(page);
                        this.selected = page;
                        break;
                    }
                }
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>
@import '../sass/variables.scss';

.overlay::before {
    content:"";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 300;
    background-color: rgba(0, 0, 0, 0.5);
}

.banner.banner--home {
    position: relative;
    min-height: 90vh;
    background-size: cover;
    background-position: center center;
    @media #{$large-and-up} {
        min-height: 30vh;
        height: 650px;
    }
    a {
        color: $white;
        @media #{$small-and-down} {
            font-size: 1rem !important;
        }
    }
    .uk-button.uk-button-primary {
        font-family: $heading-type;
        letter-spacing: 0.7px;
        background: $main-accent;
        margin-top: 8px;
        &:hover {
            background: lighten($main-accent, 5);
        }
    }
}

// .home-container{
//     width: 100%;
//     height: 90vh;
//     position: absolute;
//     top: 0;
//     left:0;
//     z-index: 200;
//     background-size: cover;
//     background-position: center center;
//     @media #{$large-and-up} {
//         height: 650px;
// 	}
// }

h1,h2,h3,h4,h5,h6 {
    color: white;
    text-align: left;
    font-family: $heading-type;
}

.type--bold {
    font-weight: bold;
}

h3 {
    color: #666;
    text-transform: uppercase;
    font-size: 48px;
}

h4 {
    // color: #666;
    color: $main-accent;
    text-transform: uppercase;
    font-size: 32px;
}

#particles-js {
/* background-image: url("./assets/sky.jpg"); */
background-size: cover;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 400;
}

.padding--tb {
    padding: 50px 0; 
}

.overview--home {
    max-width: 1000px;
    margin: 0 auto;
}

.home__tech {
    max-width: 1300px;
    margin: 0 auto;
    h3 {
        text-align: center;
    }
    >div {
        div.home__tech_overview {
            padding: 30px;
        }
        @media #{$medium-and-up} {
            // margin-top: 40px;
            // display: flex;
            // justify-content: space-between;
            div.home__tech_image {
                // width: 50%; 
                img {
                    height: 400px;
                    width: auto;
                    display: block;
                    margin: 0 auto;
                }
                
            }
        }
        @media #{$large-and-up} {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            div.home__tech_image {
                width: 50%; 
                img {
                    height: auto;
                    width: auto;
                }
            }
            div.home__tech_overview {
                width: 50%; 
                // padding-right: 42px;
                padding: 0 50px;
            }
        }
    }
}

.home__tech_buckets {
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        @media #{$small-and-down} {
            li {
                margin-bottom: 32px;
            }
        }
        @media #{$medium-and-up} {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                width: 45%;
            }
            li:first-child,
            li:nth-child(2) {
                margin-bottom: 42px;
            }
        }
    }
}

.home__quick-facts {
    h3 {
        text-align: center;
    }
    ul {
        max-width: 1300px;
        margin: 0 auto;
        list-style-type: none;
        @media #{$medium-and-up} {
            margin-bottom: 100px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                width: 30%;
                >div {
                    //padding: 16px;
                }
                >div >div {
                    font-size: 0.9em;
                    line-height: 1.5em;
                }
            }
        }
        @media #{$large-and-up} {
            li {
                width: 23%;
                padding-bottom: 16px;
            }
        }

    }
}

</style>