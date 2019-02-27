<template>
    <div class="benefits" ref="topMouseOver">
        <img src="~assets/img/benefits/man-left.png"  class="bg-10" alt="man">
        <img src="~assets/img/benefits/tilds.png"  class="bg-20" alt="tilds one ">
        <img src="~assets/img/benefits/tilds.png"  class="bg-3" alt="tilds">
        <img src="~assets/img/benefits/puzzles.png"  class="bg-4" alt="puzzles">
        <div class="container">
            <div class="benefits--title">
                <h3 class="title">{{$t('5672')}}/ {{$t('5688')}}</h3>
            </div>

            <div class="benefits__content">
                <div class="benefits__content__tabs">
                    <s-tabs @click="onClick" disable-animation>
                        <s-tab :name="$t('5672')" id="benefits" active>
                            <div class="first__content">
                                <div class="first__content--title">
                                    <div class="title s-basic">Features</div>
                                </div>
                                <div class="first__content__items">
                                    <div class="item--one item">
                                        <div class="item--one item--image">
                                            <img src="~assets/img/benefits/benefits-item-top-1.png" alt="benefit-1">
                                        </div>
                                        <div class="item--one__content item--content">
                                            <div class="item--one__content--title item__content--title">
                                                <h5 class="title">{{$t('5675')}}</h5>
                                            </div>
                                            <div class="item--one__content--description item__content--description">
                                                <p class="description">{{$t('5676')}}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item--two item">
                                        <div class="item--two item--image">
                                            <img src="~assets/img/benefits/benefits-item-top-2.png" alt="benefit-2">
                                        </div>
                                        <div class="item--two__content item__content">
                                            <div class="item--two__content--title item__content--title">
                                                <h5 class="title">{{$t('5677')}}</h5>
                                            </div>
                                            <div class="item--two__content--description item__content--description">
                                                <p class="description">{{$t('5678')}}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item--three item">
                                        <div class="item--three item--image">
                                            <img src="~assets/img/benefits/benefits-item-top-3.png" alt="benefit-3">
                                        </div>
                                        <div class="item--three__content item__content">
                                            <div class="item--three__content--title item__content--title">
                                                <h5 class="title">{{$t('5679')}}</h5>
                                            </div>
                                            <div class="item--three__content--description item__content--description">
                                                <p class="description">{{$t('5680')}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="benefits__content__tabs--underline">
                                    <div class="s-arrow_line"></div>
                                    <div class="s-arrow_diamond"></div>
                                </div>
                            </div>
                        </s-tab>

                        <s-tab :name="$t('5688')" id="posuere">
                            <div class="second__content">
                                <div class="second__content--title">
                                    <h4 class="title s-basic">{{$t('5688')}}</h4>
                                </div>
                                <div class="second__content--description">
                                    <p class="description r" v-html="$t('5689')">

                                    </p>
                                </div>
                                <div class="second__content__table">
                                    <trial-benefits-table/>
                                </div>
                            </div>
                        </s-tab>
                    </s-tabs>
                </div>

                <!--    UNDERTABS CONTENT   -->

                <div v-if="state" id="undertabs" class="benefits__content__first__content__undertabs">
                    <div class="benefits__content__first__content__undertabs--title">
                        <h5 class="s-basic title">{{$t('5681')}}</h5>
                    </div>
                    <div class="benefits__content__first__content__undertabs__blocks">
                        <div class="block-one block">
                            <div class="block-one--img block--img">
                                <img src="~assets/img/benefits/benefits-item-bot-1.png" alt="bot-benefit-1">
                            </div>
                            <div class="block-one__content block__content">
                                <div class="block-one__content--title block__content--title">
                                    <h5 class="title s-basic">{{$t('5682')}}</h5>
                                </div>
                                <div class="block-one__content--description block__content--description">
                                    <p class="description">
                                        {{$t('5683')}}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="block-two block">
                            <div class="block-two--img block--img">
                                <img src="~assets/img/benefits/benefits-item-bot-2.png" alt="bot-benefit-2">
                            </div>
                            <div class="block-two__content block__content">
                                <div class="block-two__content--title block__content--title">
                                    <h5 class="title s-basic">{{$t('5684')}}</h5>
                                </div>
                                <div class="block-two__content--description block__content--description">
                                    <p class="description">
                                        {{$t('5685')}}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="block-three block">
                            <div class="block-three--img block--img">
                                <img src="~assets/img/benefits/benefits-item-bot-3.png" alt="bot-benefit-3">
                            </div>
                            <div class="block-three__content block__content">
                                <div class="block-three__content--title block__content--title">
                                    <h5 class="title s-basic">{{$t('5686')}}</h5>
                                </div>
                                <div class="block-three__content--description block__content--description">
                                    <p class="description">
                                       {{$t('5687')}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import TrialBenefitsTable from '~/components/TrialBenefitsTable'

	export default {

    	components: {TrialBenefitsTable},

		name: "TrialBenefits",

        data() {
			return {
				state: true,
            }
        },
        methods: {
	        onClick(evt, tab) {
	        	this.state = tab.hash !== '#posuere'
            },
	        onRightMouseMove(e) {
		        const {pageX, pageY} = e

                const scena1 = document.querySelector('.bg-20')
                const scena2 = document.querySelector('.bg-3')
                const scena3= document.querySelector('.bg-4')


		        scena1.style.webkitTransform = 'translateX(' + -pageX / 1000 + '%) translateY(' + -pageY / 1000 + '%)';
		        scena1.style.transform = 'translateX(' + -pageX / 1000 + '%) translateY(' + -pageY / 1000 + '%)';
		        // scena2.style.transition = '.5s'

			        scena2.style.webkitTransform = 'translateX(' + -pageX / 1000 + '%) translateY(' + -pageY / 1000 + '%)';
			        scena2.style.transform = 'translateX(' + -pageX / 1000 + '%) translateY(' + -pageY / 1000 + '%)';
		        // scena3.style.transition = '.5s'

			        scena3.style.webkitTransform = 'translateX(' + -pageX / -1000 + '%) translateY(' + -pageY / -1000 + '%)';
			        scena3.style.transform = 'translateX(' + -pageX / -1000 + '%) translateY(' + -pageY / -1000 + '%)';
		        // scena4.style.transition = '.5s'
	        },
        },
        mounted () {
	        this.$refs.topMouseOver.addEventListener('mousemove', this.onRightMouseMove)
        }
	}
</script>

<style lang="less" scoped>
    /deep/.color2 {
        color: #3498db;
        font-family : "Open Sans";
    }

    .benefits {
        background-color: #3d4a6b;
        padding-bottom: 70px;
        padding-top: 100px;
        position : relative;
        .bg-10 {
            bottom : 0%;
            left   : 4%;
            display : none;
            position : absolute;
        }
        .bg-20 {
            left : 2%;
            top : 10%;
            position : absolute;
            display : none;
        }
        .bg-3 {
            right : 2%;
            top : 10%;
            position : absolute;
            display : none;
        }
        .bg-4 {
            right : 5%;
            top : 70%;
            display : none;
            position : absolute;
        }
        &--title {
            text-align: center;
            .title {
                font-size: 36px;
                line-height: 45px;
                color: #ffffff;
                margin-top: 0;
            }
        }
        &__content {
            &__tabs {
                width: 100%;
                margin: 0 auto;
                position: relative;
                &--underline {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    .s-arrow_diamond {
                        background: #3d4a6b;
                    }
                }
                /deep/ .s-tabs {
                    .s-tabs__header {
                        justify-content: space-between;
                        font-size : 18px;
                        &__item {
                            width: 50%;
                            text-align: center;
                            background: #2f435f;
                            -webkit-border-radius: 16px 16px 0 0;
                            -moz-border-radius: 16px 16px 0 0;
                            border-radius: 16px 16px 0 0;
                            color: #ffffff;
                            &_active {
                                background: #093547;
                            }
                        }
                    }
                    .s-tabs__content {
                        margin-top: 0;

                        -webkit-box-shadow: 0 0 20px 10px #2d3a56;
                        -moz-box-shadow: 0 0 20px 10px #2d3a56;
                        box-shadow: 0 0 20px 10px #2d3a56;
                    }
                }
                .first__content {
                    padding-top: 50px;
                    background: #3d4a6b;
                    text-align: center;
                    padding-bottom: 40px;
                    &--title {
                        margin-bottom: 100px;
                        .title {
                            font-size: 20px;
                            color: #ffffff;
                            font-weight: bold;
                        }
                    }
                    &__items {
                        display: flex;
                        justify-content: space-around;
                        .item {
                            padding: 0 25px;
                            background: #ffffff;
                            -webkit-border-radius: 6px;
                            -moz-border-radius: 6px;
                            border-radius: 6px;
                            max-width: 330px;
                            width: 33%;
                            min-height: 330px;
                            height: auto;
                            .item--image {
                                -webkit-border-radius: 50%;
                                -moz-border-radius: 50%;
                                background: #ffffff;
                                border-radius: 50%;
                                height: 120px;
                                width: 120px;
                                margin: -50px auto 0;
                                img {
                                    margin-top : -20px;
                                }
                            }
                            .item__content {
                                &--title {
                                    .title {
                                        font-size: 20px;
                                        line-height: 30px;
                                        color: #093547;
                                        margin-bottom: 10px;
                                        margin-top: 0;
                                    }
                                }
                                &--description {
                                    .description {
                                        font-size: 16px;
                                        line-height: 24px;
                                        color: #093547;
                                    }
                                }
                            }
                        }
                    }
                }

                .second__content {
                    text-align: center;
                    background: #ffffff;
                    padding-top: 50px;
                    &--title {
                        .title {
                            margin-top: 0;
                            margin-bottom : 0;
                            font-size: 20px;
                        }
                    }
                    &--description {
                        padding : 10px;
                        margin-bottom : 30px;
                        .description {
                            font-size: 18px;
                            line-height: 26px;
                            margin-bottom: 0;
                        }
                        .sub-description {
                            font-size: 16px;
                            line-height: 26px;
                            margin-top: 10px;
                        }
                    }
                }
            }
            &__first__content__undertabs {
                &--title {
                    text-align: center;
                    .title {
                        font-size: 20px;
                        color: #ffffff;
                    }
                }

                &__blocks {
                    display: flex;
                    justify-content: space-around;
                    .block {
                        width: 30%;
                        color: #ffffff;
                        text-align: center;
                        &--img {
                            height: 140px;
                            width: 140px;
                            -webkit-border-radius: 50%;
                            -moz-border-radius: 50%;
                            border-radius: 50%;
                            background: #ffffff;
                            text-align: center;
                            margin: 0 auto;
                            img {
                                height: 115px;
                            }
                        }
                        &__content {
                            .block__content--title {
                                .title {
                                    color: #ffffff;
                                    font-size: 20px;
                                    line-height: 30px;
                                }
                            }
                            .block__content--description {
                                .description {
                                    font-size : 16px;
                                    line-height : 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1500px) {
        .benefits {
            background-color: #3d4a6b;
            .bg-10 {

                display : block;
            }
            .bg-4 {

                display : block;
            }
            .bg-20 {
                display : block;
            }
            .bg-3 {
                display : block;
            }
        }
    }


    @media only screen and (max-width: 1300px) {
       .benefits {
           background: url("~assets/img/benefits/tilds.png")left 50% no-repeat,
                        url("~assets/img/benefits/tilds.png")right 50% no-repeat;

           background-color: #3d4a6b;
       }
    }

    @media only screen and (max-width: 992px) {
        .benefits {

            &__content {

                &__tabs {
                    /deep/ .s-tabs {
                        .s-tabs__header {
                            justify-content: space-between;
                            &__item {
                                background: #093547;
                                border-radius:20px 20px 0 0;
                                font-size: 13px;
                                width: 50%;
                                &_active {
                                    background: #093547;
                                }
                            }
                        }
                        .s-tabs__content {
                            margin-top: 0;
                        }
                    }
                    .first__content {
                        &--title {
                            .title {

                            }
                        }
                        &__items {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .item {
                                width: 100%;
                                margin-bottom: 110px;
                                .item--image {}
                                .item__content {
                                    margin-top: 0;
                                    -webkit-transform: translateY(0);
                                    -moz-transform: translateY(0);
                                    -ms-transform: translateY(0);
                                    -o-transform: translateY(0);
                                    transform: translateY(0);
                                    &--title {
                                        .title {}
                                    }
                                    &--description {
                                        .description {}
                                    }
                                }
                            }
                            .item--three {
                                margin-bottom : 30px;
                            }
                        }
                    }

                    .second__content {

                    }
                }
                &__first__content__undertabs {
                    &--title {
                        margin-top: 50px;
                        text-align: center;
                        .title {
                            font-size: 20px;
                            color: #ffffff;
                        }
                    }
                    &__blocks {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        .block {
                            width: 90%;
                            margin-bottom: 60px;
                            &__content {
                                &--title {
                                    .title {
                                        margin-bottom: 10px;
                                        font-size: 20px;
                                        line-height: 30px;
                                    }
                                }
                                &--description {
                                    .description {
                                        margin-top: 0;
                                        font-size: 16px;
                                        line-height: 24px;
                                    }
                                }
                            }
                        }
                        .block-two, .block-three {
                            &__content {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                &--description {
                                    width: 70%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 480px) {
        .benefits {
            background : none;
            background-color: #3d4a6b;
        }
    }
</style>