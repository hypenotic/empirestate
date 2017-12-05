<template>
    <div class="view view--home">
        <div class="banner banner--home">
            <div class="home-container" :style="{ 'background-image': 'url(' + selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url + ')'}"><div></div></div>
            <div class="overlay"></div>
            <div class="main-banner-content uk-container uk-container-large">
                <h1 v-html="selected.meta_box.es_banner_heading"></h1>
                <h2 v-html="selected.meta_box.es_banner_subheading"></h2>
                <a v-html="selected.meta_box.es_banner_cta" class="uk-button uk-button-primary" href=""></a>
                <!-- <the-content :body-copy="selected"></the-content> -->
                <!-- <div v-html="selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"></div> -->
                <!-- <img src="http://placehold.it/200x300"> -->
                <!-- <img :src="selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"> -->
            </div>
            <vue-particles
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
            </vue-particles>
        </div>
        <div class="uk-container uk-container-large">
            <div v-html="selected.content.rendered" class="overview overview--home padding--top uk-padding-large"></div>
        </div>
        <div class="uk-container uk-container-large home__tech">
            <h3 v-html="selected.meta_box.es_home_tech_heading"></h3>
            <div class="uk-padding">
                <div class="block--2-1 home__tech_image">
                    <img :src="selected.meta_box.es_home_tech_img" alt="">
                </div>
                <div v-html="selected.meta_box.es_home_tech_over" class="block--2-1 home__tech_overview">

                </div>
            </div>
        </div>
        <div class="uk-container uk-container-large home__tech_buckets">
            <div class="uk-padding-large">
                <ul>
                    <li v-for="bucket in selected.meta_box.es_home_tech_buckets" :key="bucket['es_home_tb_title']">
                        <h4 v-html="bucket['es_home_tb_title']"></h4>
                        <div v-html="bucket['es_home_tb_copy']"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="uk-container uk-container-large home__quick-facts">
            <h3 v-html="selected.meta_box.es_home_qf_heading"></h3>
            <div v-html="selected.meta_box.es_home_qf_copy" class="uk-padding-large">
            </div>
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
                featImage:""
            }
        },
        props: ['pageList', 'loadCheck'],
        created: function() {
            console.log('home');
            this.getPage(this.pageList);
        },
        watch: {
            selected: function ( newVal ) {
                this.selected = newVal;
            }
        },
        methods: {
            getPage(pages) {
                for (let page of pages) {
                    console.log(page.slug);
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
    @media #{$large-and-up} {
        min-height: 30vh;
        height: 650px;
    }
    a {
        color: $white;
    }
    .uk-button.uk-button-primary {
        font-family: $body-type;
        letter-spacing: 0.7px;
        // background: orange;
        // &:hover {
        //     background: lighten(orange, 5);
        // }
    }
}

.home-container{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left:0;
    z-index: 200;
    background-size: cover;
    background-position: center center;
    @media #{$large-and-up} {
        height: 650px;
	}
}

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
    color: #666;
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

.home__tech {
    h3 {
        text-align: center;
    }
    >div {
        @media #{$large-and-up} {
            display: flex;
            justify-content: space-between;
            div.home__tech_image {
                width: 35%; 
            }
            div.home__tech_overview {
                width: 62%; 
            }
        }
    }
}

.home__tech_buckets {
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        @media #{$large-and-up} {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                width: 45%;
            }
        }
    }
}

.home__quick-facts {
    h3 {
        text-align: center;
    }
}

</style>