<template>
    <div class="uk-container uk-container-expand">
        <h1>The Process Page</h1>
        <hr>
        <div v-html="selected.content.rendered"></div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                selected: []
            }
        },
        props: ['pageList'],
        mounted: function() {
            this.getPage(this.pageList);
        },
        methods: {
            getPage(pages) {
                for (let page of pages) {
                    console.log(page.slug);
                    if (page.slug == 'process') {
                        console.log('found it');
                        console.log(page);
                        this.selected = page;
                        break;
                    }
                }
            }
        }
    }
</script>