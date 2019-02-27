<template>
    <div class="video">
        <div class="video--title">
            <h3 class="title s-basic" v-html="$t('5659')"></h3>
        </div>
        <div class="video__block">
            <div class="video__block__content" @click="onCleverJump('main-video')">
                <div v-if="!show" class="video-clip" @click="openModal('7fCVJOYiX38', 'youtube')">
                    <img class="youtube-btn" src="~assets/img/videos/youtube-btn.png" alt="youtube-btn">
                </div>
                <!--<s-dialog :set-overflow="false" v-model="showVideo" :close-on-esc="true" >-->
                    <!--<iframe  class="video-clip" src="https://www.youtube.com/embed/2bFFB0jXOLw?autoplay=1&amp;" frameborder="0"-->
                            <!--allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"-->
                            <!--allowfullscreen>-->
                    <!--</iframe>-->
                <!--</s-dialog>-->
                <s-dialog-video
                        v-model="show"
                        :type="type"
                        :id="id"
                        :action-button="onAction"
                />

            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "TrialVideo",

        data () {
            return {
	            id: '',
	            type: 'youtube',
	            show: false


            }
        },
        methods : {
            onCleverJump (i) {
                CleverJump.hit('click', 'autoseo-trial-'+i)
            },
	        openModal(id, type) {
		        this.id = id
		        this.type = type
		        this.show = true
	        },
	        onAction() {
		        this.show = false
	        }
        }
	}
</script>

<style lang="less" scoped>
    /*/deep/ .blue-bg {*/
        /*background: #4b79bb;*/
        /*color : #ffffff;*/
    /*}*/
    .red-bg {
        background: #f1244a;
        color: #ffffff;
    }

    .video {
        margin: 0 auto;
        max-width: 1920px;
        &--title {
            text-align: center;
            z-index: 9999;
            margin-bottom: 50px;
            .title {
                z-index: 9999;
                position: relative;
                font-size: 36px;
                line-height: 45px;
                font-weight: 700;
                color: #093547;
            }
        }
        &__block {
            max-width: 1920px;
            height: 100%;
            &__content {
                height: 100%;
                text-align: center;
                background: url("~assets/img/videos/top.png") 50% 100px no-repeat,
                url("~assets/img/videos/first-left-text.png")15% 95% no-repeat,
                url("~assets/img/videos/second-left.png")43% 95% no-repeat,
                url("~assets/img/videos/third-left.png")62% 95% no-repeat,
                url("~assets/img/videos/fourth-left.png")82% 95% no-repeat,
                url("~assets/img/videos/video-bg.png")center center no-repeat;
                min-height: 400px;
                width: 100%;
                position: relative;
                .video-clip {
                    .youtube-btn {
                        margin-top: 170px;
                        cursor: pointer;
                        -webkit-transition: all 0.5s;
                        -moz-transition: all 0.5s;
                        -ms-transition: all 0.5s;
                        -o-transition: all 0.5s;
                        transition: all 0.5s;
                        -webkit-border-radius: 15px;
                        -moz-border-radius: 15px;
                        border-radius: 15px;
                        &:hover {
                            -webkit-transform: scale(1.1);
                            -moz-transform: scale(1.1);
                            -ms-transform: scale(1.1);
                            -o-transform: scale(1.1);
                            transform: scale(1.1);
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1200px) {
        .video__block__content .video-clip {
            background: url("~assets/img/videos/top.png") 50% 100px no-repeat,
            url("~assets/img/videos/first-left-text.png") 5% 95% no-repeat,
            url("~assets/img/videos/second-left.png") 43% 95% no-repeat,
            url("~assets/img/videos/third-left.png") 62% 95% no-repeat,
            url("~assets/img/videos/fourth-left.png") 90% 95% no-repeat,
            url("~assets/img/videos/video-bg.png") center center no-repeat;
            min-height: 400px;
            width: 100%;
            position: relative;
        }
    }

    @media only screen and (max-width: 992px) {
        .video__block__content .video-clip {
            background: url("~assets/img/videos/top.png") 50% 100px no-repeat,
            url("~assets/img/videos/video-bg.png") center center no-repeat;
            min-height: 400px;
            width: 100%;
            position: relative;
        }
    }

    @media only screen and (max-width: 768px) {
        .video {
            margin: 0 auto;
            max-width: 1920px;
            &__block {
                max-width: 1920px;
                height: 100%;
                &__content {
                    height: 100%;
                    text-align: center;
                    .video-clip {
                        background: url("~assets/img/videos/text-small.png")center 15% no-repeat,
                        url("~assets/img/videos/video-bg.png")center center no-repeat;
                        .youtube-btn {
                            margin-top: 180px;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 480px) {
        .video {
            margin: 0 auto;
            max-width: 1920px;
            &__block {
                max-width: 1920px;
                height: 100%;
                &__content {
                    height: 100%;
                    text-align: center;
                    .video-clip {
                        background: url("~assets/img/videos/text-small.png")center 15% no-repeat,
                                    url("~assets/img/videos/video-bg.png")center center no-repeat;
                        .youtube-btn {
                            margin-top: 180px;
                        }
                    }
                }
            }
        }
    }
</style>