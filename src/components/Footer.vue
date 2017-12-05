<template>
    <footer class="uk-padding-large">
        <div class="uk-container uk-container-expand">
            <p>Footer</p>
        </div>
    </footer>
</template>

<script>
    export default {
        props: ['pageList', 'loadCheck'],
        data: function () {
            return {

            }
        },
        created: function() {
            console.log('FOOTER LOADED');
        },
        methods: {
    
        },
        computed: {
        }
    }
</script>

<style lang="scss">
@import '../sass/variables.scss';

footer {
    background: #003b4c !important;
    color: $white;
}
</style>