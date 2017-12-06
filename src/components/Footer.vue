<template>
    <footer id="footer-anchor" class="">
        <div class="footer-outer-container">
            <div v-for="footer in footerContent" :key="footer.id" class="footer-container">
                <div>
                    <h5 v-html="footer.meta_box.es_footer_heading"></h5>
                    <div v-html="footer.meta_box.es_footer_content"></div>
                </div>
                <div class="progress">
                    <h5>Progress</h5>
                    <div class="progress__done">
                        <h6 v-html="footer.meta_box.es_prog_done_heading"></h6>
                        <div v-html="footer.meta_box.es_prog_done_list"></div>
                    </div>
                    <div class="progress__doing">
                        <h6 v-html="footer.meta_box.es_prog_doing_heading"></h6>
                        <div v-html="footer.meta_box.es_prog_done_list"></div>
                    </div>
                </div>
                <div class="contact-block">
                    <h5>Contact Us</h5>
                    <div>
                    <h6>New York Office</h6>
                    <p>677 Broadway, Suite 1101<br/>Albany, NY, 12207<br/>
                    <a href="mailto:info@empirestateconnector.com">info@empirestateconnector.com</a></p>
                    <h6>Toronto Office</h6>
                    <p>161 Bay Street, Suite 2700<br/>Toronto, ON, M5J 2S1<br/>
                    <a href="mailto:info@empirestateconnector.com">info@empirestateconnector.com</a></p>
                    </div>  
                </div>
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
    padding: 50px 0;
    a {
        font-size: 1rem !important;
    }
    h1,h2,h3,h4,h5,h6 {
        color: $white;
    }
    h5 {
        font-size: 1.5rem;
    }
    h6 {
        font-size: 1.1rem;
    }
}

.progress {
    ul {
        list-style-type: none;
         li {
            position: relative;
            font-size: 0.8rem;
            line-height: 1.1rem;
            margin-bottom: 10px;
            padding-left: 10px;
        }
    }
    .progress__done ul {
        li:before {
           content:''; 
            display:inline-block; 
            height:1em; 
            width:1em; 
            background-image: url('../assets/check-mark.svg');
            background-size:contain; 
            background-repeat:no-repeat; 
            padding-left: 0;
            position: absolute;
            left: -25px;
            top: 5px;
            opacity: 0.5;  
        }
        // list-style-image: url('../assets/check-mark.svg');
    }
    .progress__doing ul {
        li:before {
           content:''; 
            display:inline-block; 
            height:1em; 
            width:1em; 
            background-image: url('../assets/ellipsis.svg');
            background-size:contain; 
            background-repeat:no-repeat; 
            // padding-left: 2em;  
            position: absolute;
            left: -25px;
            top: 12px;
            opacity: 0.5; 
        }
        // list-style-image: url('../assets/ellipsis.svg');
    }
}

.contact-block {
    h6 {
        margin-bottom: 5px;
    }
    p {
        margin-top: 0;
    }
}

.footer-outer-container {
    max-width: 1150px;
    margin: 0 auto;
}

.footer-container {
    @media #{$large-and-up} {
        display: flex;
        justify-content: space-between;
        >div {
            width: 28%;
        }
    }
}
</style>