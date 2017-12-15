<template>
    <div class="view view--tech">
        <div class="banner banner--tech" :style="{ 'background-image': 'url(' + selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url + ')'}">
            <!-- <div class="tech-container" :style="{ 'background-image': 'url(' + selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url + ')'}"><div></div></div> -->
            <div class="overlay"></div>
            <div class="main-banner-content uk-container uk-container-large">
                <h1 v-html="selected.meta_box.es_banner_heading"></h1>
                <h2 v-html="selected.meta_box.es_banner_subheading"></h2>
            </div>
        </div>
        <div class="uk-container uk-container-large">
            <div v-html="selected.content.rendered" class="overview overview--tech padding--top uk-padding-large"></div>
        </div>
        <div class="uk-container uk-container-large tech__cable">
            <h3 v-html="selected.meta_box.es_cable_heading"></h3>
            <div class="uk-padding">
                <div v-html="selected.meta_box.es_cable_copy" class="block--2-1 tech__cable_overview">
                </div>
                <div class="block--2-1 tech__cable_image">
                    <img :src="selected.meta_box.es_cable_img" alt="">
                </div>
            </div>
        </div>
        <div class="uk-container uk-container-large tech__process uk-padding-large">
            <h3>Cable Installation</h3>
            <div uk-switcher="animation: uk-animation-fade" class="tech_tabs">
                <button class="uk-button uk-button-default" type="button" v-html="selected.meta_box.es_tech_uw_heading"></button>
                <button class="uk-button uk-button-default" type="button" v-html="selected.meta_box.es_tech_land_heading"></button>
            </div>

            <div class="uk-switcher uk-margin">
                <div>
                    <div class="tabs--image"><img :src="selected.meta_box.es_tech_uw_img" alt="land image"></div>
                    <div v-html="selected.meta_box.es_tech_uw_copy" class="tab-content"></div>
                </div>
                <div>
                    <div class="tabs--image"><img :src="selected.meta_box.es_tech_land_img" alt="land image"></div>
                    <div v-html="selected.meta_box.es_tech_land_copy" class="tab-content"></div>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue';
    export default {
        props: ['pageList', 'loadCheck'],
        components: {
            // theContent: Content,
            appFooter: Footer,
        },
        data: function () {
            return {
                selected: []
            }
        },
        created: function() {
            console.log('about');
            this.getPage(this.pageList);
        },
        methods: {
            getPage(pages) {
                for (let page of pages) {
                    console.log(page.slug);
                    if (page.slug == 'tech') {
                        console.log('found it');
                        console.log(page);
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
    background-color: rgba(0, 0, 0, 0.7);
}

.banner.banner--tech {
    position: relative;
    min-height: 70vh;
    background-size: cover;
    background-position: center center;
    @media #{$large-and-up} {
        min-height: 30vh;
        height: 500px;
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

.overview--tech {
    max-width: 1000px;
    margin: 0 auto;
}

// .tech-container{
//     width: 100%;
//     height: 90vh;
//     position: absolute;
//     top: 0;
//     left:0;
//     z-index: 200;
//     background-size: cover;
//     background-position: center center;
//     @media #{$large-and-up} {
//         height: 500px;
// 	}
// }

.tech__cable {
    h3 {
        text-align: center;
    }
    // a,
    // a em {
    //     color: $main-accent !important;
    // }
    >div {
        @media #{$large-and-up} {
            display: flex;
            justify-content: space-between;
            div.tech__cable_image {
                width: 50%; 
            }
            div.tech__cable_overview {
                width: 50%; 
                padding: 0 42px 0 0;
            }
        }
    }
}

.tech_tabs {
    display: flex;
    button {
        display: block;
        width: 50%;
        border: none;
        border-radius: 0;
        background: lighten(#e3e3e3, 5);
        padding: 16px 0;
        font-family: $heading-type;
        font-weight: 400;
    }
    button.uk-active {
        background: $main-accent;
        color: $white;
    }
}

.tab-content {
    max-width: 864px;
    margin: 0 auto;
}

.tabs--image {
    text-align: center;
    margin: 42px 0;
    img {
        max-height: 300px;
        width: auto;
    }
}

.tech__process {
    h3 {
        text-align: center;
    }
}

</style>