<template>
    <div class="website">
        <img src="~assets/img/websites/main-bg.png" alt="blue-mount" class="bg">
        <img src="~assets/img/websites/bush-right.png" alt="blue-mount" class="bg-1">
        <img src="~assets/img/websites/rocket.png" alt="blue-mount" class="bg-2">
        <div class="website--title">
            <h3 class="s-basic title" v-html="$t('5662')"></h3>
        </div>
        <div class="container">
            <div class="website__content">

                <!--SLIDER-->

                <div class="website__content--slider">
                    <s-slider infinity>
                        <s-slider-item v-for="(slide, index) in slider" :key="index">
                            <div class="my-content">

                                <div class="content__top">
                                    <div class="content__top--title">
                                        <h4 class="title">{{slide.info.case}}</h4>
                                    </div>
                                    <div class="content__top--see-more">
                                        <a href="https://semalt.expert/"
                                           target="_blank"
                                           class="see-more"
                                           @click="onCleverJump('slider-cases')"
                                        >{{slide.info['moreCases']}}</a>
                                    </div>
                                </div>

                                <div class="slider__content">

                                    <div class="content__left">
                                        <div class="content__left--img">
                                            <img :src="require('../assets/img/websites/'+ (+index+1) + '-' + (checked[index] + 1) + '.png')" alt="table" >
                                        </div>
                                        <div class="content__left--small-img">
                                            <div v-for="i in 4" :key="i" @click="classAdd(i-1, index)">
                                                <img v-if="i !== checked[index] + 1" :src="require('../assets/img/websites/'+ (+index+1) + '-' + i + '.png')" alt="image" style="max-width:100px; width: 100%;">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="content__right">
                                        <div class="content__right__container">
                                            <div class="content__right__container__block-top">
                                                <p class="s-basic keywords">
                                                    {{$t('5665')}}: <img src="~assets/img/websites/trending-up.png" alt="trending-up">
                                                    <span v-html="slide.info['keywords']"></span>
                                                </p>
                                                <ul class="block-top--list">
                                                    <li class="block-top--list--item" v-html="slide.info['site']"></li>
                                                    <li class="block-top--list--item"><strong>{{$t('5668')}}: </strong>{{slide.info['region']}}</li>
                                                    <li class="block-top--list--item"><strong>{{$t('5669')}} </strong>{{slide.info['industry']}}</li>
                                                </ul>
                                                <a :href="slide.info['href']"
                                                   class="vectorusa"
                                                   target="_blank"
                                                   @click="onCleverJump('slider-link')"
                                                ><i class="fas fa-link"></i>{{slide.info['link']}}</a>
                                            </div>
                                            <div class="content__right__container__block-bottom">
                                                <div class="block-bottom--title">
                                                    <h4 class="title">{{$t('5670')}}</h4>
                                                </div>
                                                <ul class="block-bottom--list s-basic" >
                                                    <li :class="(+i === +checked[index]) ? 'list--item active' : 'list--item'"
                                                        @click="classAdd(i, index)" v-for="(sliderLi, i) in slide.slide"
                                                        :key="sliderLi"
                                                    >{{sliderLi}}</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </s-slider-item>


                    </s-slider>
                </div>

                <div class="website__content--button">
                    <s-button type="primary"
                              element="a"
                              target="_blank"
                              href="https://sites.fastspring.com/semalt/order/confirm"
                              size="large"
                              class="button websites"
                              @click="onCleverJump('under-slider-button')"
                    >
                        <div v-html="$t('5622')"/>
                    </s-button>
                </div>


                <!--TABS-->

                <div class="website__content--tabs">
                    <s-tabs disable-animation>
                        <s-tab class="tab-title" name="CASE 1" active>
                           <div class="website__content--tabs__container">
                               <div class="website__content--tabs__container__block-top">
                                   <p class="s-basic keywords">
                                       {{$t('5665')}}: <img src="~assets/img/websites/trending-up.png" alt="trending-up">
                                       <span class="blue">379 </span>Keywords in <span class="blue"> TOP 100</span>
                                   </p>
                                   <ul class="block-top--list">
                                       <li class="block-top--list--item"><strong>SE: </strong>google.com</li>
                                       <li class="block-top--list--item"><strong>{{$t('5668')}}: </strong>USA</li>
                                       <li class="block-top--list--item"><strong>{{$t('5669')}}: </strong>Information technology</li>
                                   </ul>
                                   <a href="https://vectorusa.com/"
                                      class="vectorusa"
                                      target="_blank"
                                      @click="onCleverJump('slider-link')"
                                   ><i class="fas fa-link"></i>vectorusa.com</a>
                               </div>
                               <div class="website__content--tabs__container__block-bottom">
                                   <div class="block-bottom--title">
                                       <h4 class="title">Due to high-quality external optimization:</h4>
                                   </div>
                                   <ul class="block-bottom--list s-basic">
                                       <li class="list--item">
                                           <img src="~assets/img/websites/1-1.png" alt="tabs">
                                           <div class="flex">20 traffic-generating keywords entered Google Top 10.</div>
                                       </li>
                                       <li class="list--item">
                                           <img src="~assets/img/websites/1-2.png" alt="tabs">
                                           <div class="flex">more than 360 targeted keywords are in Google TOP 100.</div>
                                       </li>
                                       <li class="list--item">
                                           <img src="~assets/img/websites/1-3.png" alt="tabs">
                                           <div class="flex">951 backlinks were added to vectorusa.com by Semalt on the reliable authoritative site-donors.</div>
                                       </li>
                                       <li class="list--item">
                                           <img src="~assets/img/websites/1-4.png" alt="tabs">
                                           <div class="flex">As result, Site visibility has been improved on 130%.</div>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                        </s-tab>
                        <s-tab class="tab-title" name="CASE 2" active>
                            <div class="website__content--tabs__container">
                                <div class="website__content--tabs__container__block-top">
                                    <p class="s-basic keywords">
                                        {{$t('5665')}}: <img src="~assets/img/websites/trending-up.png" alt="trending-up">
                                        <span class="blue">151 </span>Keywords in <span class="blue"> TOP 1</span>
                                    </p>
                                    <ul class="block-top--list">
                                        <li class="block-top--list--item"><strong>SE: </strong>google.co.uk</li>
                                        <li class="block-top--list--item"><strong>{{$t('5668')}}: </strong>United Kingdom</li>
                                        <li class="block-top--list--item"><strong>{{$t('5669')}}: </strong>Circus
                                        </li>
                                    </ul>
                                    <a href="http://www.cirquelesoir.com/"
                                       target="_blank"
                                       class="vectorusa"
                                       @click="onCleverJump('slider-link')"
                                    ><i class="fas fa-link"></i>http://www.cirquelesoir.com/</a>
                                </div>
                                <div class="website__content--tabs__container__block-bottom">
                                    <div class="block-bottom--title">
                                        <h4 class="title">Due to high-quality external optimization:</h4>
                                    </div>
                                    <ul class="block-bottom--list s-basic">
                                        <li class="list--item">
                                            <img src="~assets/img/websites/2-1.png" alt="tabs">
                                            <div class="flex">272 traffic-generating keywords entered Google TOP 1</div>
                                        </li>
                                        <li class="list--item">
                                            <img src="~assets/img/websites/2-2.png" alt="tabs">
                                            <div class="flex">700 targeted keywords are in Google TOP 100</div>
                                        </li>
                                        <li class="list--item">
                                            <img src="~assets/img/websites/2-3.png" alt="tabs">
                                            <div class="flex">10.3 K backlinks were added to http://www.cirquelesoir.com/  by Semalt on the reliable authoritative site-donors.</div>
                                        </li>
                                        <li class="list--item">
                                            <img src="~assets/img/websites/2-4.png" alt="tabs">
                                            <div class="flex">As result, Site visibility has been improved on 120%</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </s-tab>
                        <s-tab class="tab-title" name="CASE 3" active>
                            <div class="website__content--tabs__container">
                                <div class="website__content--tabs__container__block-top">
                                    <p class="s-basic keywords">
                                        {{$t('5665')}}: <img src="~assets/img/websites/trending-up.png" alt="trending-up">
                                        <span class="blue">8 </span>Keywords in <span class="blue"> TOP 1</span>
                                    </p>
                                    <ul class="block-top--list">
                                        <li class="block-top--list--item"><strong>SE: </strong>google.es</li>
                                        <li class="block-top--list--item"><strong>{{$t('5668')}}: </strong>Spain</li>
                                        <li class="block-top--list--item"><strong>{{$t('5669')}}: </strong>Marketing agency</li>
                                    </ul>
                                    <a href="https://www.ipanemacomunicacion.com/"
                                       class="vectorusa"
                                       target="_blank"
                                       @click="onCleverJump('slider-link')"
                                    ><i class="fas fa-link"></i>https://www.ipanemacomunicacion.com/</a>
                                </div>
                                <div class="website__content--tabs__container__block-bottom">
                                    <div class="block-bottom--title">
                                        <h4 class="title">Due to high-quality external optimization:</h4>
                                    </div>
                                    <ul class="block-bottom--list s-basic">
                                        <li class="list--item">
                                           <img src="~assets/img/websites/3-1.png" alt="tabs">
                                            <div class="flex">9 traffic-generating keywords entered Google TOP 1</div>
                                        </li>
                                        <li class="list--item">
                                            <img src="~assets/img/websites/3-2.png" alt="tabs">
                                            <div class="flex">348 targeted keywords are in Google TOP 100</div>
                                        </li>
                                        <li class="list--item">
                                            <img src="~assets/img/websites/3-3.png" alt="tabs">
                                            <div class="flex">3,5 K backlinks were added to ipanemacomunicacion.com by Semalt on the reliable authoritative site-donors.</div>
                                        </li>
                                        <li class="list--item">
                                            <img src="~assets/img/websites/3-4.png" alt="tabs">
                                            <div class="flex">As result, site visibility has been improved on 40%</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </s-tab>
                        <div class="website__content--button">
                            <s-button href="https://sites.fastspring.com/semalt/order/confirm"
                                      class="button"
                                      element="a"
                                      target="_blank"
                                      type="primary"
                                      size="large"
                                      @click="onCleverJump('mobile-tab-link')">
                                <div v-html="$t('5622')"/>
                            </s-button>
                        </div>
                    </s-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

	export default {
		name: "TrialWebsites",
        data() {
            return {
                // slide: 1,
                activeLink: 1,
                slider: {
                	0: {
                		slide: {
                            0: '20 traffic-generating keywords entered Google Top 10.',
                            1: 'more than 360 targeted keywords are in Google TOP 100.',
                            2: '951 backlinks were added to vectorusa.com by Semalt on the reliable authoritative site-donors.',
                            3: 'As result, Site visibility has been improved on 130%.',
                        },
                        info: {
                			'case': 'CASE 1',
                            'moreCases': 'See more cases',
                            'keywords':`<span class="blue">379 </span>Keywords in <span class="blue"> TOP 100</span>`,
                            'site': '<strong>SE: </strong>google.com',
                            'region': 'USA',
                            'industry' : 'Information technology',
                            'link': 'vectorusa.com',
                            'href': 'https://vectorusa.com/'
                        },
                    },
	                1: {
		                slide: {
                            0: '272 traffic-generating keywords entered Google TOP 1\n',
                            1: '700 targeted keywords are in Google TOP 100\n',
                            2: '10.3 K backlinks were added to http://www.cirquelesoir.com/  by Semalt on the reliable authoritative site-donors.',
                            3: 'As result, Site visibility has been improved on 120%\n',
                        },
                        info: {
	                        'case': 'CASE 2',
	                        'moreCases': 'See more cases',
	                        'keywords':`<span class="blue">151 </span>Keywords in <span class="blue"> TOP 1</span>`,
	                        'site': '<strong>SE: </strong>google.co.uk',
	                        'region': 'United Kingdom',
	                        'industry' : 'Circus',
	                        'link': 'http://www.cirquelesoir.com/  \n',
	                        'href': 'http://www.cirquelesoir.com/'
                        }
	                },
	                2: {
                        slide: {
                            0: '9 traffic-generating keywords entered Google TOP 1',
                            1: '348 targeted keywords are in Google TOP 100\n',
                            2: '3,5 K backlinks were added to ipanemacomunicacion.com by Semalt on the reliable authoritative site-donors.',
                            3: 'As result, site visibility has been improved on 40%\n',
                        },
                        info: {
	                        'case': 'CASE 3',
	                        'moreCases': 'See more cases',
	                        'keywords':`<span class="blue">8 </span>Keywords in <span class="blue"> TOP 1</span>`,
	                        'site': '<strong>SE: </strong>google.es',
	                        'region': 'Spain',
	                        'industry' : 'Marketing agency',
	                        'link': 'https://www.ipanemacomunicacion.com/',
	                        'href': 'https://www.ipanemacomunicacion.com/'
                        },
	                },
                },
                checked: {
                	0: 0,
                    1: 0,
                    2: 0,
                },
            }
        },
        methods : {
	        onCleverJump(i) {
		        CleverJump.hit('click', 'autoseo-trial-' + i)
	        },
	        classAdd(item, currentSlide) {
                this.checked[currentSlide] = +item
	        },
        },
    }
</script>

<style lang="less" scoped>

    /*/deep/ .blue-bg {*/
        /*background: #4b79bb;*/
        /*color : #ffffff;*/
    /*}*/

    /deep/.blue {
        font-weight: bold;
        color: #4b79bb;
        font-size: 20px;
        line-height: 24px;
        font-family: "Open Sans";
    }
    
    .red-bg {
        background: #f1244a;
        color: #ffffff;
    }
    
    .website {
        padding-top: 100px;
        padding-bottom: 100px;
        background: url("~assets/img/websites/bush-right.png")right 100% no-repeat,
                    url("~assets/img/websites/rocket.png")0 100% no-repeat,
                    url("~assets/img/websites/main-bg.png")center 100% no-repeat;
        .bg {
            display : none;
        }
        .bg-1 {
            display : none;
        }
        .bg-2 {
            display : none;
        }

        &--title {
            text-align: center;
            .title {
                font-size: 36px;
                letter-spacing: 1px;
                line-height: 45px;
                color: #093547;
                font-weight: 700;
                font-family: "Raleway";

            }
        }
        &__content {
            display: flex;
            flex-direction: column;
            align-items: center;
            &--slider {
                width : 90%;
                /deep/ .s-slider__dots {
                    display: none;
                }
                .my-content {
                    width: 100%;
                    .content__top {
                        display: flex;
                        align-items: center;
                        background: #093547;
                        -webkit-border-radius: 16px 16px 0 0;
                        -moz-border-radius: 16px 16px 0 0;
                        border-radius: 16px 16px 0 0;
                        padding-left: 40px;
                        &--title {
                            margin-right: 15px;
                            .title {
                                color: #ffffff;
                                font-family : "Open Sans";
                            }
                        }
                        &--see-more {
                            .see-more {
                                color: #ffffff;
                                position: relative;
                                padding-right: 25px;
                                &:after {
                                    content: '';
                                    border: 8px solid transparent;
                                    border-left: 8px solid #e6254a;
                                    position: absolute;
                                    right: 0;
                                    bottom: 0;
                                }
                            }
                        }
                    }

                    .slider__content {
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        background: #e8edf6;
                        padding: 20px 40px 40px;
                        .content__left {
                            width: 49%;
                            display : flex;
                            flex-direction : column;
                            
                            &--img {
                                display : flex;
                                align-items : center;
                                justify-content : center;
                                height : 350px;
                                overflow : hidden;
                                width : 100%;
                                img {
                                    max-width : 90%;
                                    width: auto;
                                }
                            }
                            &--small-img {

                                height : 40%;
                                display : flex;
                                justify-content : space-between;
                                align-items : center;
                                width : 100%;
                                img {
                                    width : 30%;
                                }
                            }
                        }
                        .content__right {
                            width: 49%;
                            &__container {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: flex-start;
                                &__block-top {
                                    background: #d8e1ef;
                                    -webkit-border-radius: 16px;
                                    -moz-border-radius: 16px;
                                    border-radius: 16px;
                                    width: 100%;
                                    padding: 30px 35px;
                                    .keywords {
                                        font-size: 16px;
                                        font-weight: bold;
                                        color: #093547;
                                    }
                                    .block-top--list {
                                        list-style-type: none;
                                        margin: 0;
                                        padding: 0;
                                        &--item {
                                            font-size: 16px;
                                            line-height: 24px;
                                            color: #093547;
                                            font-family : "Open Sans";
                                        }
                                    }
                                    .vectorusa {
                                        color: #4b79bb;
                                        font-size: 16px;
                                        i {
                                            margin-right: 10px;
                                        }
                                    }
                                }

                                &__block-bottom {
                                    .block-bottom--title {
                                        .title {
                                            font-weight: bold;
                                            font-size: 16px;
                                            line-height: 20px;
                                            color: #093547;
                                        }
                                    }
                                    .block-bottom--list {
                                        font-family: "Myriad Pro";
                                        .list--item {
                                            font-size: 16px;
                                            line-height: 24px;
                                            color: #093547;
                                            font-family : "Open Sans";
                                            &:before {
                                                background: #ffffff;
                                                -webkit-transition: .5s;
                                                -moz-transition: .5s;
                                                -ms-transition: .5s;
                                                -o-transition: .5s;
                                                transition: .5s;
                                            }
                                            &.active {
                                                &:before {
                                                    background : #4b79bb;
                                                }
                                            }
                                            &:hover:before {
                                                background: #4b79bb;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            &--tabs {
                display: none;
                background: #e8edf6;
                padding: 40px 35px;
                /deep/ .s-tabs__header {
                    text-align : center;
                    a {
                        width : 33%;
                        font-family : "Open Sans";
                        font-size : 20px;
                        color : #093547;
                    }
                }
                &__container {
                    &__block-top {
                        background: #d8e1ef;
                        -webkit-border-radius: 16px;
                        -moz-border-radius: 16px;
                        border-radius: 16px;
                        width: 100%;
                        padding: 30px 35px;
                        .keywords {
                            font-size: 16px;
                            font-weight: bold;
                            font-family : "Open Sans";
                            color: #093547;
                        }
                        .block-top--list {
                            list-style-type: none;
                            margin: 0;
                            padding: 0;
                            &--item {
                                font-size: 16px;
                                line-height: 24px;
                                color: #093547;
                                font-family : "Open Sans";
                            }
                        }
                        .vectorusa {
                            color: #4b79bb;
                            font-size: 16px;
                            i {
                                margin-right: 10px;
                            }
                        }
                    }

                    &__block-bottom {
                        .block-bottom--list {
                            margin: 0;
                            padding: 0;
                            font-family : "Open Sans";
                            .list--item {
                                font-size: 16px;
                                line-height: 24px;
                                color: #093547;
                                display : flex;
                                img {
                                    width : 25%;
                                    -webkit-border-radius : 15px;
                                    -moz-border-radius    : 15px;
                                    border-radius         : 15px;
                                }
                                div {
                                    font-family : "Open Sans";
                                    width : 70%;
                                }
                                &:before {
                                    display: none;
                                }
                                img {
                                    margin-right: 20px;
                                }
                            }
                        }
                    }
                }
            }

            &--button {
                margin: 40px auto 30px;
                text-align : center;
                max-width : 280px;

                .button {
                    font-size: 18px;
                    div {
                        font-family : "Open Sans";
                    }
                }
            }
        }
    }
    @media only screen and (min-width: 1920px) {
        .website {
            z-index : 101;
            position : relative;
            background : none;
            .bg {
                display : block;
                position : absolute;
                width : 100%;
                z-index : -1;
                left  : 0;
                right : 0;
                bottom : 0;
                height : 900px;
            }
            .bg-1 {
                display : block;
                position : absolute;
                z-index : -1;
                right  : 0;
                bottom : 0;
            }
            .bg-2 {
                display : block;
                position : absolute;
                z-index : -1;
                left : 0;
                bottom : 0;
            }
        }
    }
    @media only screen and (max-width: 992px) {
        .website {
           &__content {
               &--slider {
                   .my-content {
                       .slider__content {
                           flex-direction : column;
                           .content__left {
                               width : 100%;
                               order : 2;
                           }
                           .content__right {
                               width : 100%;
                           }
                       }
                   }
               }
           }
        }






    }

    @media only screen and (max-width: 768px) {
        .website {
            padding-top : 15px;
            &--title {
                margin-bottom : 50px;
                .title {
                    line-height: 36px;
                }
            }
            &__content {
                display: flex;
                flex-direction: column;
                align-items: center;
                &--slider {
                    display: none;
                }

                &--tabs {
                    display: block;
                    background: #e8edf6;
                    padding: 40px 25px;
                    &__container {
                        &__block-top {
                            background: #d8e1ef;
                            -webkit-border-radius: 16px;
                            -moz-border-radius: 16px;
                            border-radius: 16px;
                            width: 100%;
                            padding: 30px 35px;
                            .keywords {
                                font-size: 16px;
                                font-weight: bold;
                                color: #093547;
                            }
                            .block-top--list {
                                list-style-type: none;
                                margin: 0;
                                padding: 0;
                                &--item {
                                    font-size: 16px;
                                    line-height: 24px;
                                    color: #093547;
                                }
                            }
                            .vectorusa {
                                color: #4b79bb;
                                font-size: 16px;
                                i {
                                    margin-right: 10px;
                                }
                            }
                        }

                        &__block-bottom {
                            .block-bottom--list {
                                margin: 0;
                                padding: 0;
                                .list--item {
                                    font-size: 16px;
                                    line-height: 24px;
                                    color: #093547;
                                    &:before {
                                        display: none;
                                    }
                                    img {
                                        margin-right: 20px;
                                        height: 80px;
                                    }
                                }
                            }
                        }
                    }
                    .website__content--button {
                        display: block;
                        /*.button {*/
                            /*padding: 10px 20px;*/
                        /*}*/
                    }
                }

                &--button {
                    display: none;
                }
            }
        }
    }

    @media only screen and (max-width: 480px) {
        .website {
            background: url("~assets/img/websites/main-bg.png")center 100% no-repeat;
            &--title {
                .title {
                    line-height: 36px;
                }
            }
            &__content {
                display: flex;
                flex-direction: column;
                align-items: center;
                &--slider {
                    display: none;
                }

                &--tabs {
                    display: block;
                    background: #e8edf6;
                    padding: 40px 25px;
                    /*width : 95%;*/
                    &__container {
                        &__block-top {
                            background: #d8e1ef;
                            -webkit-border-radius: 16px;
                            -moz-border-radius: 16px;
                            border-radius: 16px;
                            width: 100%;
                            padding: 30px 35px;
                            .keywords {
                                font-size: 16px;
                                font-weight: bold;
                                color: #093547;
                            }
                            .block-top--list {
                                list-style-type: none;
                                margin: 0;
                                padding: 0;
                                &--item {
                                    font-size: 16px;
                                    line-height: 24px;
                                    color: #093547;
                                }
                            }
                            .vectorusa {
                                color: #4b79bb;
                                font-size: 16px;
                                word-break: break-all;
                                i {
                                    margin-right: 10px;
                                }
                            }
                        }

                        &__block-bottom {
                            .block-bottom--title {
                                text-align : center;
                            }
                            .block-bottom--list {
                                margin: 0;
                                padding: 0;
                                .list--item {
                                    font-size: 16px;
                                    line-height: 24px;
                                    color: #093547;
                                    flex-direction : column;
                                    align-items : center;
                                    margin-bottom : 30px;
                                    position : relative;
                                    div {
                                        width : 90%;
                                        text-align : center;
                                    }
                                    &:before {
                                        display: none;
                                    }
                                    img {
                                        width : 50%;
                                        height : auto;
                                        margin-right : 0;
                                        margin-bottom : 15px;
                                        -webkit-transition : .5s;
                                        -moz-transition    : .5s;
                                        -ms-transition     : .5s;
                                        -o-transition      : .5s;
                                        transition         : .5s;
                                        &:hover {
                                            transform         : scale(2.2);
                                            -webkit-border-radius : 0;
                                            -moz-border-radius    : 0;
                                            border-radius         : 0;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .website__content--button {
                        display: block;
                        /*.button {*/
                        /*padding: 10px 20px;*/
                        /*}*/
                    }
                }

                &--button {
                    display: none;
                }
            }
        }
    }

</style>