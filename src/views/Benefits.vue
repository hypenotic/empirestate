<template>
    <div class="view view--benefits view--padding-top">
        <div class="uk-container uk-container-expand non-home-container">
            <h1>The Benefits Page</h1>
            <hr>
            <p>Testing rendering of Benefits page</p>
            <!-- <div v-html="selected.content.rendered"></div> -->
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