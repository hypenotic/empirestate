<template>
	<div class="uk-container uk-container-expand non-home-container">
        <h1>The Blog Page</h1>
        <hr>
        <div v-html="selected.content.rendered"></div>

    </div>
</template>

<script>
    export default {
        props: ['pageList'],
        data: function () {
            return {
                selected: []
            }
        },
        created: function() {
            console.log('blog');
            this.getPage(this.pageList);
        },
        methods: {
            getPage(pages) {
                for (let page of pages) {
                    console.log(page.slug);
                    if (page.slug == 'blog') {
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