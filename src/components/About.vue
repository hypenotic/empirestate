<template>
    <div class="uk-container uk-container-expand non-home-container">
        <h1>The About Page</h1>
        <hr>
        <p>Testing rendering of About page</p>
        <!-- <div v-html="selected.content.rendered"></div> -->
    </div>
</template>

<script>
    export default {
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
                    if (page.slug == 'about') {
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