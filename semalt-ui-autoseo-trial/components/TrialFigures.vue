<template>
    <div class="figures">
        <div class="container">
            <div class="figures--title">
                <h3 class="s-basic title">{{$t('5651')}}</h3>
            </div>
            <div class="figures__points">
                <div class="figures__points--item first">
                    <div class="figures__points--item__content">
                        <div class="figures__points--item__content--image">
                            <img src="~assets/img/figures/key.png" alt="key">
                        </div>
                        <div class="figures__points--item__content--description">
                            <h2 class="s-basic blue">300</h2>
                            <p class="s-basic words" v-html="$t('5654')"></p>
                        </div>
                    </div>
                </div>

                <div class="figures__points--item second">
                    <div class="figures__points--item__content">
                        <div class="figures__points--item__content--image">
                            <img src="~assets/img/figures/card.png" alt="card">
                        </div>
                        <div class="figures__points--item__content--description">
                            <h2 class="s-basic blue">3</h2>
                            <p class="s-basic words" v-html="$t('5656')"></p>
                        </div>
                    </div>
                </div>

                <div class="figures__points--item third">
                    <div class="figures__points--item__content">
                        <div class="figures__points--item__content--image">
                            <img src="~assets/img/figures/user.png" alt="user">
                        </div>
                        <div class="figures__points--item__content--description">
                            <h2 class="s-basic blue">0.55</h2>
                            <p class="s-basic words bold">{{$t('5652')}}<br><span>{{$t('5653')}}</span></p>
                        </div>
                    </div>
                </div>

                <div class="figures__points--item fourth">
                    <div class="figures__points--item--cube">
                        <img src="~assets/img/figures/cube.png" class="cube" alt="cube">
                    </div>
                </div>

                <div class="figures__points--item fifth">
                    <div class="figures__points--item__content">
                        <div class="figures__points--item__content--image">
                            <img src="~assets/img/figures/list.png" alt="list">
                        </div>
                        <div class="figures__points--item__content--description">
                            <h2 class="s-basic blue">250</h2>
                            <p class="s-basic words bold">{{$t('5657')}}<br><span>{{$t('5658')}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "TrialFigures"
	}
</script>

<style lang="less" scoped>

    /deep/.semalt-figures-media-text1 {
        font-weight : bold;
    }

    .figures {
        margin-top: -50px;
        padding-bottom: 100px;
        &--title {
            text-align: center;
            .title {
                font-size: 36px;
                font-family: "Raleway";
                font-weight: bold;
                color: #093547;
            }
        }
        &__points {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            overflow: hidden;
            &--item {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 10px;
                padding-bottom: 10px;
                width: 100%;
                &__content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    &--image {
                        height: 100px;
                        width: 100px;
                        -webkit-border-radius: 50%;
                        -moz-border-radius: 50%;
                        border-radius: 50%;
                        -webkit-box-shadow: 0 0 10px 5px #f2f4fa;
                        -moz-box-shadow:  0 0 10px 5px #f2f4fa;
                        box-shadow:  0 0 10px 5px #f2f4fa;
                        text-align: center;
                        img {
                            margin-top: 20px;
                        }
                    }
                    &--description {
                        display: flex;
                        align-items: center;
                        position: relative;
                        &:after {
                            content: '';
                            position: absolute;
                            left: calc(50% - 10px);
                            bottom: -20px;
                            border: 10px solid transparent;
                            border-bottom: 10px solid #f1244a;
                            -webkit-border-radius: 2px;
                            -moz-border-radius: 2px;
                            border-radius: 5px;
                        }
                        &:before {
                            content: '';
                            position: absolute;
                            height: 180px;
                            width: 2px;
                            border-left: 2px dashed #e8ebf4;
                            bottom: -210px;
                            left: calc(50% - 2px);
                        }
                        .blue {
                            margin: 0;
                            font-size: 60px;
                            color: #4b79bb;
                            font-family: "Open Sans";
                            font-weight: 800;
                            text-align: center;

                            position : relative;
                            &:before {
                                content: '>';
                                font-size: 20px;
                                color: #4b79bb;
                                font-family: "Segoe UI";
                                font-weight: bold;
                                text-align: center;

                                position : absolute;
                                left : -20px;
                            }
                        }

                        .words {
                            font-size: 16px;
                            color: #000;
                            font-family: "Open Sans";
                            font-weight: 400;

                            &.bold {
                                font-weight : bold;
                                span {
                                    font-weight : normal;
                                }
                            }
                        }
                    }
                }
            }

            .first {
                width: 45%;
                align-items: flex-end;
            }
            .second {
                width: 45%;
                align-items: flex-start;
            }
            .third, .fourth, .fifth {
                width: 33%;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        .figures {
            margin-top: 0px;
            padding: 0 30px 50px;
            &--title {
                text-align: center;
                .title {
                    font-size: 36px;
                    font-family: "Raleway";
                    font-weight: bold;
                    color: #093547;
                }
            }
            &__points {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                justify-content: space-around;
                align-items: center;
                overflow: hidden;
                &--item {
                    display: flex;
                    align-items: center;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    /*width: 100%;*/
                    &__content {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items : flex-start;
                        /*width: 70%;*/
                        width : auto;
                        &--image {
                            margin-right: 40px;
                            margin-left: 8px;
                            img {
                                margin-top: 20px;
                            }
                        }
                        &--description {
                            display: flex;
                            flex-direction : column;
                            flex-wrap: wrap;
                            align-items: center;
                            position: relative;
                            min-width : 200px;
                            text-align : center;
                            &:after {
                                display: none;
                            }
                            &:before {
                                display: none;
                            }
                        }
                    }
                }

                .first {
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                }
                .second {
                    width: 100%;
                    align-items: center;
                    justify-content: space-around;
                }
                .third, .fourth, .fifth {
                    width: 100%;
                    justify-content: space-around;
                }
                 .fourth {
                    order: 6;
                    .cube {
                        width: 150px;
                }
            }
        }
    }
}

    @media only screen and (max-width: 480px) {
        .figures {
            &__points {
                &--item {
                    &__content {
                        &--image {
                            height : 65px;
                            width  : 65px;
                            margin-right : 0;
                            img {
                                height : 30px;
                            }
                        }
                        &--description {
                            .blue {
                                font-size : 52px;
                            }
                            .words {
                                .bold {

                                }
                                .span {

                                }
                            }

                        }
                    }
                }
            }
        }
    }
</style>