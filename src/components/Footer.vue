<template>
    <footer id="footer-anchor" class="uk-padding-large">
        <div v-for="footer in footerContent" :key="footer.id" class="footer-container">
            <div>
                    <h5 v-html="footer.meta_box.es_footer_heading"></h5>
                    <div v-html="footer.meta_box.es_footer_content"></div>
            </div>
            <div class="progress">
                <div>
                    <h5 v-html="footer.meta_box.es_prog_done_heading"></h5>
                    <div v-html="footer.meta_box.es_prog_done_list"></div>
                </div>
                <div>
                    <h5 v-html="footer.meta_box.es_prog_doing_heading"></h5>
                    <div v-html="footer.meta_box.es_prog_done_list"></div>
                </div>
            </div>
            <div class="newsletter">

            </div>
        </div>
    </footer>
</template>

<script>
    import axios from 'axios';
    export default {
        props: ['pageList', 'loadCheck'],
        data: function () {
            return {
                footerContent: []
            }
        },
        created: function() {
            console.log('FOOTER LOADED');
        },
        methods: {
            getFooter() {
                var app = this;
                if (app.footerContent.length > 0) {
                    // setTimeout(function(){ app.blogLoad = false }, 1000);
                } else {
                    console.log('footer - loading');
                    axios.get('http://dev.hypenotic.com/cms-empire/wp-json/wp/v2/footer?per_page=1&_embed')
                    .then(function (response) {
                        console.log(response.data);
                        app.footerContent = response.data;
                        // setTimeout(function(){ app.blogLoad = false }, 1000);
                    })
                    .catch(function (error) {
                    console.log(error)
                    })
                } 
            }
        },
        beforeMount() {
            this.getFooter();
        },
        computed: {
        }
    }
</script>

<style lang="scss">
@import '../sass/variables.scss';

footer {
    background: darken($main-accent, 30) !important;
    color: $white;
}

.footer-container {
    @media #{$large-and-up} {
        display: flex;
        justify-content: space-between;
        >div {
            width: 30%;
        }
    }
}
</style>