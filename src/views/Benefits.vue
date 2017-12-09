<template>
    <div class="view view--benefits">
        <div class="banner banner--benefits" :style="{ 'background-image': 'url(' + selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url + ')'}">
            <!-- <div class="benefits-container" :style="{ 'background-image': 'url(' + selected._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url + ')'}"><div></div></div> -->
            <div class="overlay"></div>
            <div class="main-banner-content uk-container uk-container-large">
                <h1 v-html="selected.meta_box.es_banner_heading"></h1>
                <h2 v-html="selected.meta_box.es_banner_subheading"></h2>
            </div>
        </div>
        <div class="uk-container uk-container-large">
            <div v-html="selected.content.rendered" class="overview overview--benefits padding--top uk-padding-large"></div>
        </div>
        <div class="uk-container uk-container-large benefits__buckets">
            <div class="uk-padding-large">
                <ul>
                    <li v-for="bucket in selected.meta_box.es_benefit_buckets" :key="bucket['es_bene_tb_title']">
                        <h3 v-html="bucket['es_bene_tb_title']"></h3>
                        <div v-html="bucket['es_bene_tb_copy']" class="bucket-copy"></div>
                    </li>
                </ul>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue';
    export default {
        components: {
            // theContent: Content,
            appFooter: Footer,
        },
        props: ['pageList', 'loadCheck'],
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
                    if (page.slug == 'benefits') {
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
    background-color: rgba(0, 0, 0, 0.3);
}

.banner.banner--benefits {
    position: relative;
    min-height: 90vh;
    background-size: cover;
    background-position: top center;
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

.benefits-container{
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 0;
    left:0;
    z-index: 200;
    background-size: cover;
    background-position: top center;
    @media #{$large-and-up} {
        height: 500px;
	}
}

.overview--benefits {
    max-width: 1000px;
    margin: 0 auto;
}

.benefits__buckets {
    max-width: 1000px;
    margin: 0 auto;
    >div {
        padding-top: 0;
    }
    >div >ul {
        list-style-type: none;
        >li {
            margin-bottom: 50px;
            @media #{$large-and-up} {
                margin-bottom: 100px;
            }
            >div {
                // margin-left: 24px;
            }
        }
        h3 {

        }
    }
}

.benefits__buckets {
    ul {
        padding: 0;
    }
}


</style>
