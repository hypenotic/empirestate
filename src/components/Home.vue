<template>
    <div class="uk-container uk-container-expand">
        <h1>The Home Page</h1>
        <hr/>
        <the-content :body-copy="selected"></the-content>

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
                selected: []
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