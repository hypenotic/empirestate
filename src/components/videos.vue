<template>
    <section id="videos">
        <div class="embed-container" id="video-container">
            <div class="video-wrap left" id="video-wrap-left"><iframe src="https://player.vimeo.com/video/302301981?muted=1&autoplay=1&loop=1" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen id="placeholder-vid-1" class=""></iframe></div>

            <div class="video-wrap right" id="video-wrap-right"><iframe src="https://player.vimeo.com/video/302302610" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen id="placeholder-vid-2"></iframe></div>

            <svg width="16px" height="44px" id="right-arrow" v-on:click="moveVideo(true)" viewBox="0 0 16 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-1360.000000, -1227.000000)" class="arrow" fill-rule="nonzero" stroke="#FFFFFF" stroke-width="2">
                        <polyline points="1361 1270.41309 1374.19824 1249.02396 1361 1228"></polyline>
                    </g>
                </g>
            </svg>

            <svg width="16px" height="44px" viewBox="0 0 16 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="left-arrow" v-on:click="moveVideo(false)">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-1359.000000, -1227.000000)" fill-rule="nonzero" stroke="#FFFFFF" class="arrow" stroke-width="2">
                        <polyline transform="translate(1367.599121, 1249.206543) scale(-1, 1) translate(-1367.599121, -1249.206543) " points="1361 1270.41309 1374.19824 1249.02396 1361 1228"></polyline>
                    </g>
                </g>
            </svg>
        </div>
    </section>
</template>

<script>
    import es6Promise from 'es6-promise';
    es6Promise.polyfill();
    import 'es6-promise/auto';
    import axios from 'axios';
    export default {
        props: ['pageList', 'loadCheck'],
        data: function () {
            return {
                vidState: null,
            }
        },
        created: function() {
            console.log('VIDEOS LOADED');
        },
        methods: {
            moveVideo(status) {
                if (status) {
                    console.log('move1');
                    var vid1wrap = document.getElementById("video-wrap-left");
                    vid1wrap.classList.add('move-back');
                    console.log('move2');
                    var vid1 = document.getElementById("placeholder-vid-1");
                    vid1.classList.add('move-back');
                    console.log('move2');
                    var vid2wrap = document.getElementById("video-wrap-right");
                    vid2wrap.classList.add('move-back');
                    console.log('move3');
                    var vid2 = document.getElementById("placeholder-vid-2");
                    vid2.classList.add('move-back');
                    var cont = document.getElementById("videos");
                    cont.classList.add('move-back');
                    console.log('move5');
                    var right = document.getElementById("right-arrow");
                    right.classList.add('move-back');
                    console.log('move4');
                    var left = document.getElementById("left-arrow");
                    left.classList.add('move-back');
                } else {
                    console.log('move1');
                    var vid1wrap = document.getElementById("video-wrap-left");
                    vid1wrap.classList.remove('move-back');
                    console.log('move2');
                    var vid1 = document.getElementById("placeholder-vid-1");
                    vid1.classList.remove('move-back');
                    console.log('move2');
                    var vid2wrap = document.getElementById("video-wrap-right");
                    vid2wrap.classList.remove('move-back');
                    console.log('move3');
                    var vid2 = document.getElementById("placeholder-vid-2");
                    vid2.classList.remove('move-back');
                    console.log('move3');
                    var cont = document.getElementById("videos");
                    cont.classList.remove('move-back');
                    console.log('move5');
                    var right = document.getElementById("right-arrow");
                    right.classList.remove('move-back');
                    console.log('move4');
                    var left = document.getElementById("left-arrow");
                    left.classList.remove('move-back');
                }
                
            },
        },
        computed: {
        }
    }
</script>

<style lang="scss">
@import '../sass/variables.scss';

#videos {
    height: 85vh;
    // background: lightgrey;
    margin-bottom: 80px;
    position: relative;
    overflow: hidden;
}

// #videos::after {
//     display: block;
//     position: absolute;
//     background-image: linear-gradient(to right, black 0%, transparent 50%, black 100%);
//     // margin-top: -80vh;
//     top: 0;
//     left: 0;
//     height: 90vh;
//     width: 100%;
//     content: '';
// }

.embed-container { 
    position: relative; 
    padding-bottom: 56.25%; 
    height: 0; 
    overflow: hidden; 
    max-width: 100%; 
    transition: all 0.5s ease;
} 

.video-wrap {
    position: relative;
    display: block;
    height: 100%;
    // transition: left 0.5s ease;
    &:after {
        display: block;
        position: absolute;
        height: 85vh;
        content: '';
    }
    &.right:after {
        background-image: linear-gradient(to right, black 0%, transparent 50%, black 100%);
        top: 0;
        left: 80vw;
        opacity: 1;
        transition: opacity 0.5s ease;
        width: 100%;
        // transition-delay: 0.5s;
    }
    &.right.move-back:after {
        display: none;
        opacity: 0;
        width: 0;
        overflow: hidden;
    }
    &.left:after {
        // display: none;
        opacity: 0;
        transition: opacity 0.5s ease;
        transition-delay: 0.5s;
        width: 0;
        overflow: hidden;
    }
    &.left.move-back:after {
        background-image: linear-gradient(to left, black 0%, transparent 50%, black 100%);
        top: 0;
        left: -80vw;
        width: 100%;
        display: block;
        opacity: 1;
    }
}
    
.embed-container >div iframe#placeholder-vid-1 { 
    position: absolute; 
    top: 0; 
    left: -11vw; 
    // object-position: center top;
    // object-position: 100px 50px;
    width: 100%; 
    height: 85vh; 
    transition: all 0.5s ease;
}

.embed-container >div iframe#placeholder-vid-2 { 
    position: absolute; 
    top: 0; 
    left: 70vw; 
    // object-position: center top;
    // object-position: 100px 50px;
    width: 100%; 
    height: 85vh; 
    transition: all 0.5s ease;
}

// #videos::after {
//     display: block;
//     position: absolute;
//     background-image: linear-gradient(to right, black 0%, transparent 50%, black 100%);
//     // margin-top: -80vh;
//     top: 0;
//     left: 80vw;
//     height: 90vh;
//     width: 100%;
//     content: '';
// }

#right-arrow,
#left-arrow {
    &:hover {
        cursor: pointer;
        .arrow {
            stroke: $blue !important;
        }
    }
} 

#right-arrow {
    position: absolute;
    right: 5vw;
    top: calc(50% - 88px);
    z-index: 1000;
}

#left-arrow {
    // display: none;
    // visibility: hidden;
    opacity: 0;
    display: block;
    position: absolute;
    left: 5vw !important;
    top: calc(50% - 88px);
    z-index: 2000;
}

#left-arrow.move-back {
    opacity: 1;
}

#right-arrow.move-back {
    display: none !important;
}

#placeholder-vid-1.move-back {
    left: -70vw !important;
}

#placeholder-vid-2.move-back {
    left: 10vw !important;
}

</style>