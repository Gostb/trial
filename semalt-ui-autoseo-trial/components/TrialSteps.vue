<template>
    <div class="steps">
        <img src="~assets/img/steps/bottom-bg.png" alt="blue mount" class="bg">
        <img src="~assets/img/steps/bot-right.png" alt="blue mount" class="bg-2">
        <div class="mob-img">
            <img src="~assets/img/steps/bot-right.png" alt="boy">
        </div>
        <div class="container">
            <div class="steps--title">
                <h2 class="title s-basic" v-html="$t('5632')"></h2>
            </div>
            <div class="steps__list">
                <div class="steps__list--item one">
                    <div class="steps__list--item__left">
                        <div class="steps__list--item__left--number">
                            <img src="~assets/img/steps/11.png" alt="number">
                        </div>
                        <div class="steps__list--item__left__info">
                            <div class="steps__list--item__left__info--title">
                                <div class="title flex flex-bottom">
                                    <h4 v-html="$t('5633')"></h4>
                                    <!--<i class="fas fa-hand-pointer"></i>-->
                                </div>
                                <div class="steps__list--item__left__info--description">
                                    <p class="description">{{$t('5634')}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="steps__list--item__right">
                        <div class="img">
                            <img src="~assets/img/steps/1.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="steps__list--item two">
                    <div class="steps__list--item__left">
                        <div class="steps__list--item__left--number">
                            <img src="~assets/img/steps/22.png" alt="number">
                        </div>
                        <div class="steps__list--item__left__info">
                            <div class="steps__list--item__left__info--title">
                                <div class="title flex flex-bottom">
                                    <h4 v-html="$t('5635')"></h4>
                                    <!--<i class="fas fa-link"></i>-->
                                </div>
                                <div class="steps__list--item__left__info--description">
                                    <p class="description" v-html="$t('5636')">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="steps__list--item__right">
                        <div class="img">
                            <img src="~assets/img/steps/2.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="steps__list--item three">
                    <div class="steps__list--item__left">
                        <div class="steps__list--item__left--number">
                            <img src="~assets/img/steps/33.png" alt="number">
                        </div>
                        <div class="steps__list--item__left__info">
                            <div class="steps__list--item__left__info--title">
                                <div class="title flex flex-bottom">
                                    <h4 v-html="$t('5637')"></h4>
                                    <!--<i class="fas fa-arrow-up"></i>-->
                                </div>
                                <div class="steps__list--item__left__info--description">
                                    <p class="description" v-html="$t('5638')">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="steps__list--item__right">
                        <div class="img">
                            <img src="~assets/img/steps/3.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="steps__list--item four">
                    <div class="steps__list--item__left">
                        <div class="steps__list--item__left--number">
                            <img src="~assets/img/steps/44.png" alt="number">
                        </div>
                        <div class="steps__list--item__left__info">
                            <div class="steps__list--item__left__info--title">
                                <div class="title flex flex-bottom">
                                    <h4 v-html="$t('5639')"></h4>
                                    <!--<i class="fas fa-life-ring"></i>-->
                                </div>
                                <div class="steps__list--item__left__info--description">
                                    <ul class="s-basic description">
                                        <li>{{$t('5640')}}</li>
                                        <li>{{$t('5641')}}</li>
                                        <li>{{$t('5642')}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="steps__list--item__right">
                        <div class="img">
                            <img src="~assets/img/steps/4.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="steps__list--item five">
                    <div class="steps__list--item__left">
                        <div class="steps__list--item__left--number">
                            <img src="~assets/img/steps/55.png" alt="number">
                        </div>
                        <div class="steps__list--item__left__info">
                            <div class="steps__list--item__left__info--title">
                                <div class="title flex flex-bottom">
                                    <h4 v-html="$t('5643')"></h4>
                                    <!--<i class="fas fa-file-alt"></i>-->
                                </div>
                                <div class="steps__list--item__left__info--description">
                                    <p class="description">{{$t('5644')}}</p>
                                    <ul class="s-basic description--list">
                                        <li>{{$t('5645')}}</li>
                                        <li>{{$t('5646')}}</li>
                                        <li>{{$t('5647')}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="steps__list--item__right">
                        <div class="img">
                            <img src="~assets/img/steps/5.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="steps__list--item six">
                    <div class="steps__list--item__left">
                        <div class="steps__list--item__left--number">
                            <img src="~assets/img/steps/66.png" alt="number">
                        </div>
                        <div class="steps__list--item__left__info">
                            <div class="steps__list--item__left__info--title">
                                <div class="title flex flex-bottom">
                                    <h4 v-html="$t('5648')"></h4>
                                    <!--<i class="fas fa-fighter-jet"></i>-->
                                </div>
                                <div class="steps__list--item__left__info--description">
                                    <p class="description" v-html="$t('5649')"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="steps__list--item__right">
                        <div class="img">
                            <img src="~assets/img/steps/6.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="warning">
                    <div class="warning--img">
                        <i class="fas fa-exclamation-circle"></i>
                    </div>
                    <div class="warning--text">
                        <p class="text s-basic r" v-html="$t('5689')"></p>
                        <!--<p class="small s-basic">(Autoseo monthly price with discount for long-term subscription starts from <span class="blue-text">74$</span>).</p>-->
                    </div>
                    <div class="warning--button">
                        <s-button href="https://sites.fastspring.com/semalt/order/confirm/"
                                  element="a"
                                  target="_blank"
                                  class="button steps"
                                  type="primary"
                                  size="large"
                                  v-on:click="onCleverJump">
                            <div v-html="$t('5622')"/>
                        </s-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "TrialSteps",

      data () {
			return {
				order: '',
            }
      },
      mounted () {
			// console.log(this.counter)
      },
      methods : {
			onCleverJump () {
                CleverJump.hit('click', 'autoseo-trial')
            }
      }
	}
</script>

<style lang="less" scoped>
    /*/deep/.blue-bg {*/
        /*background: #4b79bb;*/
        /*color : #ffffff;*/
    /*}*/
    .blue-text {
        color: #4b79bb;
    }

    /deep/ i {
        color: #f1244a;
        margin-left: 15px;
    }

    .steps {
        background: url("~assets/img/steps/plane.png") center 65% no-repeat,
                    url("~assets/img/steps/bot-right.png") 90% 95% no-repeat,
                    url("~assets/img/steps/bottom-bg.png") center 106% no-repeat;
        -webkit-background-size : auto, 150px, auto;
        background-size         : auto, 150px, auto;
        padding-bottom: 200px;
        padding-top: 100px;
        position : relative;
        z-index : 100;
        .bg {
            display : none;

        }
        .bg-2 {
            display : none;
        }
        .mob-img {
            display: none;
        }

        &--title {
            text-align: center;
        }
        &__list {
            &--item {
                color: #093547;
                display: flex;
                justify-content: space-between;
                padding: 30px;
                background: #ffffff;
                border: 1px solid #f2f4fa;
                -webkit-box-shadow: 0 0 20px 5px #e2e3e7;
                -moz-box-shadow: 0 0 20px 5px #e2e3e7;
                box-shadow: 0 0 20px 5px #e2e3e7;
                -webkit-border-radius: 16px;
                -moz-border-radius: 16px;
                border-radius: 16px;
                margin-bottom: 20px;
                position: relative;
                &:after {
                    position: absolute;
                    content: '';
                    bottom: -9px;
                    left: 30px;
                    background: #ffffff;
                    box-shadow: -4px 4px 6px 0px #e2e3e7;
                    border-right: 3px solid white;
                    border-top: 3px solid white;
                    width: 15px;
                    height: 15px;
                    transform: rotate(-45deg);
                }
                &__left {
                    display: flex;
                    width: 55%;
                    &--number {
                        margin-right: 30px;
                    }
                    &__info {
                        &--title {
                            .title {
                                border-left: 3px solid #f1244a;
                                padding-left: 20px;
                                font-size: 20px;
                                h4 {
                                    margin : 0;
                                }
                            }
                        }
                        &--description {
                            margin-top : 30px;
                            p {
                                font-size: 16px;
                            }
                            ul {
                                li {
                                    margin-bottom: 0;
                                    font-size: 16px;
                                    line-height: 30px;
                                    font-family : "Open Sans";
                                }
                            }
                        }
                    }
                }
                &__right {
                    width: 38%;
                    .img {
                        width: 100%;
                        img {
                            width: 100%;
                        }
                    }
                }
            }

            .six {
                &:after {
                    display: none;
                }
            }

            .warning {
                color: #093547;
                max-width: 900px;
                margin: 0 auto;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                &--img {
                    position: absolute;
                    height: 50px;
                    width: 50px;
                    background: #f2f4fa;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                    top: 15px;
                    left: -25px;
                    text-align: center;
                    i {
                        color: #f1244a;
                        line-height: 50px;
                        font-size: 16px;
                    }
                }
                &--text {
                    -webkit-border-radius: 16px;
                    -moz-border-radius: 16px;
                    border-radius: 16px;
                    background: #d8e1ef;
                    padding: 30px 70px;
                    text-align: center;
                   .text {
                       margin: 0;
                       padding: 0;
                       font-size: 18px;
                       line-height: 26px;
                       /deep/ .color2 {
                           color : #3498db;
                           font-family : "Open Sans";
                       }
                   }
                    .small {
                        font-size: 14px;
                        margin-top: 0;
                        margin-bottom: 0;
                    }
                }
                &--button {
                    margin-top: 30px;
                    margin-bottom: 40px;
                    .button {
                        color: #ffffff;
                        background: #f1244a;
                        padding: 10px 30px;
                        -webkit-border-radius: 6px;
                        -moz-border-radius: 6px;
                        border-radius: 6px;
                        text-decoration: none;
                        font-weight: bold;
                        transition         : .4s;
                        div {
                            font-family : "Open Sans";
                        }
                        &:hover {
                            background : #4cbac0;
                            border-color : #4cbac0;
                        }   
                    }
                }

            }

        }
    }

    @media only screen and (min-width: 1920px) {
        .steps {
            background : none;
            position : relative;
            z-index : 100;
            .bg {
                display : block;
                position : absolute;
                width : 100%;
                left  : 0;
                right : 0;
                bottom : -80px;
                z-index : -1;
                height : 1000px;
            }
            .bg-2 {
                display : block;
                position : absolute;
                right : 5%;
                bottom : 0;
            }
        }
    }

    @media only screen and (max-width: 1280px) {
        .steps {
            background-size         : auto, 100px, auto;
        }
    }

    @media only screen and (max-width: 768px) {
        *li {
            line-height : 25px;
        }
        .steps {
            background: url("~assets/img/steps/bottom-bg.png") 50% 106% no-repeat;
            padding-bottom: 200px;
            padding-top : 30px;
            position: relative;

            .mob-img {
                display: block;
                position: absolute;
                bottom: 0;
                left: calc(50% - 50px);
                img {
                    height: 200px;
                }
            }

            &--title {
                text-align: center;
                width: 70%;
                margin: 0 auto 50px;
                .title {
                    font-size: 25px;
                    line-height: 35px;
                    color: #093547;
                }
            }
            &__list {
                &--item {
                    color: #093547;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    -webkit-border-radius: 0;
                    -moz-border-radius: 0;
                    border-radius: 0;
                    &:after {
                        left : calc(50% - 7px);
                    }
                    &__left {
                        display: flex;
                        width: 100%;
                        &--number {
                            display: none;
                        }
                        &__info {
                            &--title {
                                .title {
                                    display : flex;
                                    justify-content : flex-start;
                                    border-left: 0;
                                    padding-left: 0;
                                    h4 {
                                        font-size: 20px;
                                        color: #093547;
                                        position : relative;
                                        padding-left : 15px;
                                        &:before {
                                            position : absolute;
                                            content: '1.';
                                            color: #f3526b;
                                            margin-right: 5px;
                                            font-size : 20px;
                                            line-height : 23px;
                                            top : 0;
                                            left : -5px;
                                            font-family : "Open Sans";
                                        }
                                    }


                                }
                            }
                            &--description {
                                p {
                                    font-size: 16px;
                                    line-height: 24px;
                                    color: #093547;
                                }
                                ul {
                                    li {
                                        color: #093547;
                                        line-height: 24px;
                                    }
                                }
                            }
                        }
                    }
                    &__right {
                        width: 90%;
                        .img {
                            width: 100%;
                            img {
                                width: 100%;
                            }
                        }
                    }
                }

                .two {
                    .steps__list--item__left {
                        .steps__list--item__left__info {
                            .steps__list--item__left__info--title {
                                .title {
                                    h4 {
                                        &:before {
                                        content: '2.';
                                        color: #f3526b;
                                        }
                                    }
                                }
                            }
                        }

                    }

                }
                .three {
                    .steps__list--item__left {
                        .steps__list--item__left__info {
                            .steps__list--item__left__info--title {
                                .title {
                                    h4 {
                                        &:before {
                                        content: '3.';
                                        color: #f3526b;
                                        margin-right: 5px;
                                        }
                                    }
                                }
                            }

                        }

                    }

                }
                .four {
                    .steps__list--item__left {
                        .steps__list--item__left__info {
                            .steps__list--item__left__info--title {
                                .title {
                                    h4 {
                                        &:before {
                                        content: '4.';
                                        color: #f3526b;
                                        margin-right: 5px;
                                        }
                                    }
                                }
                            }

                        }

                    }

                }
                .five {
                    .steps__list--item__left {
                        .steps__list--item__left__info {
                            .steps__list--item__left__info--title {
                                .title {
                                    h4 {
                                        &:before {
                                        content: '5.';
                                        color: #f3526b;
                                        margin-right: 5px;
                                        }
                                    }
                                }
                            }

                        }

                    }

                }
                .six {
                    .steps__list--item__left {
                        .steps__list--item__left__info {
                            .steps__list--item__left__info--title {
                                .title {
                                    h4 {
                                        &:before {
                                        content: '6.';
                                        color: #f3526b;
                                        margin-right: 5px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                .six {
                    &:after {
                        display: none;
                    }
                }

                .warning {
                    width: 90%;
                    color: #093547;
                    max-width: 900px;
                    margin: 50px auto 0;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    &--img {
                        position: absolute;
                        height: 50px;
                        width: 50px;
                        background: #f2f4fa;
                        -webkit-border-radius: 50%;
                        -moz-border-radius: 50%;
                        border-radius: 50%;
                        top: -25px;
                        left: calc(50%-25px);
                        text-align: center;
                        i {
                            color: #f1244a;
                            line-height: 50px;
                            font-size: 16px;
                            margin-left : 0;
                        }
                    }
                    &--text {
                        padding: 50px 30px 30px;
                    }
                    &--button {
                        margin-top: 30px;
                        margin-bottom: 40px;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 480px) {

        .steps {
            position : relative;
            .bg {
                display : block;
                position : absolute;
                width : 100%;
                bottom : 10%;
                height : 600px;
            }
        }
    }

</style>