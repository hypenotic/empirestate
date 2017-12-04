<template>
    <div class="uk-container uk-container-expand home-component">
        <div class="home-container" :style="{ 'background-image': 'url(' + selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url + ')'}"><div></div></div>
        <div class="overlay"></div>
        <div class="main-content">
            <h1 v-html="selected.meta_box.es_banner_heading"></h1>
            <h2 v-html="selected.meta_box.es_banner_subheading"></h2>
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
</template>

<script>
    import Content from './content.vue';
    export default {
        components: {
            theContent: Content
        },
        data: function () {
            return {
                selected: [],
                featImage:""
            }
        },
        props: ['pageList'],
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

.home-container{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left:0;
    z-index: 200;
    background-size: cover;
    background-position: top center;
}

h1 {
    /* position: relative; */
    padding-top: 5%;
    color: white;
    font-size: 6vw;
    line-height: 6vw;
}

h1,h2,h3,h4,h5,h6 {
    color: white;
    text-align: left;
}

h2 {
    margin-top: 10px;
    width: 80%;
}

.main-content {
    color: white;
    position: relative;
    z-index: 500;
    display: inline-block;
    width: 960px;
    margin: 0 auto;
    text-align: center;
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
</style>