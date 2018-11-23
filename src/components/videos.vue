<template>
    <section id="videos">
        <div class="embed-container" id="video-container">
            <div class="video-wrap left move-item" id="video-wrap-left"><iframe src="https://player.vimeo.com/video/302301981?muted=1&autoplay=1&loop=1" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen id="placeholder-vid-1" class="move-item"></iframe></div>

            <div class="video-wrap right move-item" id="video-wrap-right"><iframe src="https://player.vimeo.com/video/302302610?muted=1" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen id="placeholder-vid-2" class="move-item"></iframe></div>

            <svg width="16px" height="44px" id="right-arrow" v-on:click="moveVideo(true)" class="move-item" viewBox="0 0 16 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-1360.000000, -1227.000000)" class="arrow" fill-rule="nonzero" stroke="#FFFFFF" stroke-width="2">
                        <polyline points="1361 1270.41309 1374.19824 1249.02396 1361 1228"></polyline>
                    </g>
                </g>
            </svg>

            <svg width="16px" height="44px" viewBox="0 0 16 44" version="1.1" class="move-item" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="left-arrow" v-on:click="moveVideo(false)">
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
        mounted: function() {
            var iframe = document.querySelector('iframe');
            var player = new Vimeo.Player(iframe);

            player.on('play', function() {
            console.log('Played the video');
            });

            player.getVideoTitle().then(function(title) {
            console.log('title:', title);
            });
        },
        methods: {
            moveVideo(status) {
                var movingElements = document.getElementsByClassName('move-item');


                if (status) {
                    for (var i = 0; i < movingElements.length; i++) {
                        movingElements[i].classList.add('move-active');
                    }

                    var current = document.getElementById("placeholder-vid-1");
                    var player1 = new Vimeo.Player(current);

                    player1.pause();

                    var next = document.getElementById("placeholder-vid-2");
                    var player2 = new Vimeo.Player(next);

                    player2.setCurrentTime(0);
                    player2.play();

                } else {
                    for (var i = 0; i < movingElements.length; i++) {
                        movingElements[i].classList.remove('move-active');
                    }

                    var current = document.getElementById("placeholder-vid-2");
                    var player1 = new Vimeo.Player(current);

                    player1.pause();

                    var next = document.getElementById("placeholder-vid-1");
                    var player2 = new Vimeo.Player(next);
                   
                    player2.setCurrentTime(0);
                    player2.play();
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
    margin-bottom: 80px;
    position: relative;
    overflow: hidden;
}

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
    &:after {
        display: block;
        position: absolute;
        height: 85vh;
        content: '';
    }
    &.right:after {
        background-image: linear-gradient(to right, black 0%, transparent 50%, black 100%);
        top: 0;
        left: 83vw;
        opacity: 1;
        transition: opacity 0.5s ease;
        width: 100%;
        transition-delay: 0.5s;
    }
    &.right.move-active:after {
        opacity: 0;
        width: 0;
        overflow: hidden;
    }
    &.left:after {
        opacity: 0;
        transition: opacity 0.5s ease;
        transition-delay: 0.5s;
        width: 0;
        overflow: hidden;
    }
    &.left.move-active:after {
        background-image: linear-gradient(to left, black 0%, transparent 50%, black 100%);
        top: 0;
        left: -83vw;
        width: 100%;
        display: block;
        opacity: 1;
    }
}
    
.embed-container >div {
    iframe#placeholder-vid-1 { 
        position: absolute; 
        top: 0; 
        left: -8vw; 
        width: 100%; 
        height: 85vh; 
        transition: all 0.5s ease;
    }
}

.embed-container >div iframe#placeholder-vid-2 { 
    position: absolute; 
    top: 0; 
    left: 73vw; 
    width: 100%; 
    height: 85vh; 
    transition: all 0.5s ease;
}

#placeholder-vid-1.move-active {
    left: -73vw !important;
}

#placeholder-vid-2.move-active {
    left: 8vw !important;
}

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
    opacity: 0;
    display: block;
    position: absolute;
    left: 5vw !important;
    top: calc(50% - 88px);
    z-index: 2000;
}

#left-arrow.move-active {
    opacity: 1;
}

#right-arrow.move-active {
    display: none !important;
}

</style>