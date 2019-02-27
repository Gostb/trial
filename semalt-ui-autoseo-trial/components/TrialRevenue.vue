<template>
    <div class="revenue--bg">
        <div class="container">
            <div class="revenue">

                <!--TITLE-->
                <div class="revenue__top">
                    <div class="revenue__top--title">
                        <h2 class="title s-basic" v-html="$t('5750')"></h2>
                    </div>
                </div>

                <!--CONTENT-->
                <div class="revenue__bottom">

                    <!--//LEFT-SIDE-->
                    <div class="revenue__bottom__left">
                        <div class="revenue__bottom__left--descr">
                            <p class="descr" v-html="$t('5751')">

                            </p>
                        </div>
                        <div class="revenue__bottom__left__row flex">
                            <div class="revenue__bottom__left__row--sign sign-one">
                                <img src="~assets/img/revenue/mark.png" alt="exclamation mark">
                            </div>
                            <div class="revenue__bottom__left__row--text">
                                <h4 class="uppercase">{{$t('5752')}}</h4>
                                <h4 class="text" v-html="$t('5753')"></h4>
                            </div>
                        </div>
                        <div class="revenue__bottom__left__row flex">
                            <div class="revenue__bottom__left__row--sign sign-two">
                                <img src="~assets/img/revenue/mark.png" alt="exclamation mark">
                            </div>
                            <div class="revenue__bottom__left__row--text">
                                <h4 class="uppercase">{{$t('5754')}}</h4>
                                <h4 class="text">{{$t('5755')}}</h4>
                            </div>
                        </div>
                    </div>

                    <!--//RIGHT-SIDE-->
                    <div class="revenue__bottom__right">
                        <div class="revenue__bottom__right__content">
                            <div v-if="!showVideo" @click="showVideo = true" class="revenue__bottom__right__content--img">
                                <img class="youtube-btn" src="~assets/img/revenue/youtube-icon.svg" alt="youtube-btn">
                            </div>
                            <s-dialog :set-overflow="false" v-model="showVideo" :close-on-esc="true" >
                                <img src="~assets/img/revenue/pop-up.png" alt="video-icon">
                                <iframe class="revenue__bottom__right__content--video"
                                        src="https://www.youtube.com/embed/ZS4YbOcWMBs"
                                        frameborder="0"
                                        style="height: 400px; width: 100%;"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                            </s-dialog>
                        </div>
                    </div>
                </div>

                <div class="button">
                    <s-button type="primary"
                              element="a"
                              target="_blank"
                              href="https://sites.fastspring.com/semalt/order/confirm"
                              @click="onCleverJump('start-your-trial-button')"
                              size="large"
                              animation="pulse"
                    >
                        <div v-html="$t('5622')" />
                    </s-button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "TrialRevenue",

        data () {
			return {
				showVideo: false,
            }
        },
        methods : {
            onCleverJump (i) {
                CleverJump.hit('click', 'autoseo-trial-'+i)
            }
        }
	}
</script>

<style lang="less" scoped>
    
    /deep/ .blue {
        color : #4b79bb;
        font-weight : bold;
    } 
    
    /*/deep/ .blue-bg {*/
        /*background : #4b79bb;*/
        /*color : #fff;*/
    /*}*/

    /deep/ .s-dialog-wrap {
        max-width : 700px !important;
        .s-dialog__inner {
            overflow : visible;
            .s-dialog__inner__content {
                .s-dialog-content {
                    padding : 55px 25px 25px 25px;
                    img {
                        position : absolute;
                        top : -50px;
                    }
                }
            }
        }
    }


    .revenue {
        &__top {
            text-align : center;
        }
        &__bottom {
            display : flex;
            justify-content : space-around;
            &__left {
                flex : 1;
                &--descr {
                    .descr {
                        font-size : 18px;
                        line-height : 26px;
                    }
                }
                &__row {
                    margin-bottom : 25px;
                    display : flex;
                    align-items : center;
                    &--sign {
                        min-height : 60px;
                        min-width  : 60px;
                        -webkit-border-radius : 50%;
                        -moz-border-radius    : 50%;
                        border-radius         : 50%;
                        -webkit-box-shadow :0 0 20px 5px  #f4f7f9  ;
                        -moz-box-shadow    :0 0 20px 5px  #f4f7f9  ;
                        box-shadow         :0 0 20px 5px  #f4f7f9  ;
                        text-align : center;
                        margin-right : 20px;
                        img {
                            height : 45px;
                            margin-top : calc(50% - 22px);
                        }
                    }
                    &--text {
                        display : flex;
                        align-items : baseline;
                        .uppercase {
                            font-size: 22px;
                            font-family : "Segoe UI";
                            line-height : 25px;
                            text-transform: uppercase;
                            margin-right: 4px;
                            font-weight : bold;
                            color : #4b79bb;
                            margin-bottom : 20px;
                        }
                        .text {
                            font-size : 18px;
                            line-height : 26px;
                            font-weight : normal;
                            font-family : "Segoe UI";
                            margin-bottom : 20px;
                        }
                    }
                    .sign-two {
                        -webkit-transform : rotate(180deg);
                        -moz-transform    : rotate(180deg);
                        -ms-transform     : rotate(180deg);
                        -o-transform      : rotate(180deg);
                        transform         : rotate(180deg);
                    }
                }
            }
            &__right {
                flex: 2;
                &__content {
                    position : relative;
                    &--img {
                        background : url("~assets/img/revenue/bg-revenue.png") center no-repeat;
                        height : 100%;
                        min-height : 400px;
                        text-align : center;
                        &:before {
                            position : absolute;
                            content :'';
                            height : 40px;
                            width : 40px;
                            background : #fff;
                            left : calc(50% - 10px);
                            top : calc(50% - 15px);
                        }
                        .youtube-btn {
                            position : absolute;
                            height : 60px;
                            top : calc(50% - 25px);
                            left : calc(50% - 35px);
                            &:hover {
                                cursor : pointer;
                            }
                        }

                    }
                }
            }
        }

        .button {
            text-align : center;
            margin : 60px auto 0;
            max-width : 280px;
            .s-btn {
                font-size : 18px;
                div {
                    font-family : "Open Sans";
                }
            }
        }
    }

    @media  only screen and (max-width: 1200px) {
        .revenue {
            &__bottom {
                flex-direction : column;
                &__left {
                    display : flex;
                    flex-wrap : wrap;
                    justify-content : center;
                    /*flex-direction : column;*/
                    order : 2;
                    /*align-items : center;*/
                    flex :unset;
                    &__decr {
                        width : 100%;                    }
                    &__row {
                        width : 45%;
                        justify-content : center;
                        /*justify-content : center;*/
                    }
                }
            }
        }
    }

    @media  only screen and (max-width: 992px) {
        .revenue {
            &__bottom {
                &__left {
                    &__row {
                        width : 50%;
                        justify-content : flex-start;
                    }
                }
            }
        }
    }
    @media  only screen and (max-width: 768px) {
        .revenue {
            padding : 15px;
            &__bottom {
                &__left {
                    flex-direction : column;
                    &__row {
                        width : 100%;
                        justify-content : flex-start;
                    }
                }
            }
        }
    }
    @media  only screen and (max-width: 480px) {
        .revenue {
            padding : 15px;
            &__bottom {
                &__left {
                    &__row {
                        &--sign {
                            height : 25px;
                            width : 25px;
                            img {
                                height : 15px;
                                margin-top : calc(50% - 7px);
                            }
                        }
                        &--text {
                            .uppercase {
                                font-size: 18px;
                            }
                            .text {
                                font-size : 16px;
                            }
                        }
                    }
                }
            }
            .button {
                margin-top : 30px;
            }
        }
    }
</style>