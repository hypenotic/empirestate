<template>
    <section id="videos">
        <div class="embed-container" id="video-container">
            <div class="move-item">
                <iframe src="https://player.vimeo.com/video/302301981?muted=1&autoplay=1&loop=1" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen id="placeholder-vid-1" class="move-item"></iframe>
            </div>

            <div class="move-item">
                <iframe src="https://player.vimeo.com/video/302302610?muted=1" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen id="placeholder-vid-2" class="move-item">
                </iframe>
            </div>


            <svg width="16px" height="44px" id="right-arrow" v-on:click="moveVideo(true)" class="move-item" viewBox="0 0 16 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g transform="translate(-1360.000000, -1227.000000)" class="arrow" fill="none" stroke="#FFFFFF" stroke-width="2">
                    <polyline points="1361 1270.41309 1374.19824 1249.02396 1361 1228"></polyline>
                </g>
            </svg>

            <svg width="16px" height="44px" viewBox="0 0 16 44" version="1.1" class="move-item" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="left-arrow" v-on:click="moveVideo(false)">
                <g transform="translate(-1359.000000, -1227.000000)" fill="none" stroke="#FFFFFF" class="arrow" stroke-width="2">
                    <polyline transform="translate(1367.599121, 1249.206543) scale(-1, 1) translate(-1367.599121, -1249.206543) " points="1361 1270.41309 1374.19824 1249.02396 1361 1228"></polyline>
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
            }
        },
        created: function() {
        },
        mounted: function() {
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
                    // player2.setCurrentTime(0);
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
                    // player2.setCurrentTime(0);
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
    
    #videos{
        @media #{$medium-and-up} {
            width: 100%;
            overflow: hidden;
            margin-bottom: 70px;
        }
    }
    
    iframe{
        @media #{$medium-and-down} {
            width: 100%;
            margin: 1rem 0;
        }
        @media #{$medium-and-up} {
            width: calc(75vw + 100px);
            height: 90vh;
            object-fit: cover;
        }
    }
    
    #videos {
        @media #{$medium-and-up} {
            height: 90vh;
            .embed-container { 
                position: relative;
                display: flex;
                
            }
        }
    }
    
    #placeholder-vid-1, #placeholder-vid-2{
        transition: all 0.5s ease;
    }
        
    #placeholder-vid-1.move-active {
        @media #{$medium-and-up} {
            margin-left: calc(-50vw - 200px);
            -webkit-filter: brightness(.25);
            filter: brightness(.25);
        }
    }
    
    #placeholder-vid-2{
        @media #{$medium-and-up} {
            -webkit-filter: brightness(.25);
            filter: brightness(.25);
        }
    }

    #placeholder-vid-2.move-active {
        -webkit-filter: brightness(1);
        filter: brightness(1);
    }

    #right-arrow,
    #left-arrow {
        @media #{$small-and-down} {
            display: none;
        }
    }

    @media #{$medium-and-up} {
        #right-arrow,
        #left-arrow {
            z-index: 1;
            &:hover {
                cursor: pointer;
                .arrow {
                    stroke: $blue !important;
                }
            }
            top: 50%;
            z-index: 1000;
            transform: translate(0, -50%);
        } 

        #right-arrow {
            position: absolute;
            right: 2vw;
        }

        #left-arrow {
            opacity: 0;
            display: block;
            position: absolute;
            left: 2vw !important;
        }

        #left-arrow.move-active {
            opacity: 1;
        }

        #right-arrow.move-active {
            display: none !important;
        }
    }

    @media #{$large-and-up} {
        #right-arrow {
            right: 5vw;
        }

        #left-arrow {
            left: 5vw !important;
        }
    }    

</style>