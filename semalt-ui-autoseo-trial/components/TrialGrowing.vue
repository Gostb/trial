<template>
  <div class="grow">
    <div class="grow-bg-bot"></div>
    <div class="container">
      <div class="grow__content">
        <div class="grow__content--title">
          <h2 class="s-basic title" v-html="$t('5737')"></h2>
        </div>
        <div class="grow__content__graphs">
          <div class="graphs-img">
            <img src="~assets/img/growing/graphic.png" alt="graphic">
          </div>
          <div class="graphs__links">
            <ul class="links">
              <p class="source">Source:</p>
              <li class="link--item">
                <a href="https://searchengineland.com/google-now-handles-2-999-trillion-searches-per-year-250247"
                   target="_blank"
                   @click="onCleverJump('google-search-link-1')">Google Search Forecast for 2016 </a>
              </li>
              <li class="link--item">
                <a href="https://searchengineland.com/google-1-trillion-searches-per-year-212940"
                   target="_blank"
                   @click="onCleverJump('google-search-link-2')">Google Search Forecast for 2014 </a>
              </li>
              <li class="link--item">
                <a href="http://www.internetlivestats.com/google-search-statistics/"
                   target="_blank"
                   @click="onCleverJump('google-search-link-3')">Google Search Statistics 1999-2012 </a>
              </li>
              <li class="link--item">
                <a href="http://www.internetlivestats.com/one-second/#google-band"
                   target="_blank"
                   @click="onCleverJump('google-search-link-3')">Google searches in 1 second</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="graphs--text">
          <p class="text" v-html="$t('5739')"></p>
        </div>

        <div class="grow__content__numbers">
          <div class="top--img">
            <img src="~assets/img/growing/illustration.png" alt="illustration">
          </div>
          <div class="grow__content__numbers--img">
            <img src="~assets/img/growing/photo.png" alt="illusration">
          </div>
          <div class="grow__content__numbers--right">
            <div class="grow__content__numbers--right--title">
              <h3 class="s-basic title" v-html="$t('5740')"></h3>
            </div>
            <ul class="grow__content__numbers--right__list">
              <li class="grow__content__numbers--right__list--item" v-html="$t(5741)"></li>
              <li class="grow__content__numbers--right__list--item" v-html="$t(5742)"></li>
              <li class="grow__content__numbers--right__list--item" v-html="$t(5743)"></li>
              <li class="grow__content__numbers--right__list--item" v-html="$t(5744)"></li>
              <li class="grow__content__numbers--right__list--item" v-html="$t(5745)"></li>
              <!--<li class="grow__content__numbers&#45;&#45;right__list&#45;&#45;item"><div class="item&#45;&#45;left" v-html="$t(5741)"></div><div class="item&#45;&#45;right"><span class="is">= </span><span class="margin" style="margin-right: 15px;"></span><strong>69,000</strong></div></li>-->
              <li class="grow__content__numbers--right__list--item" v-html="$t(5746)"></li>
            </ul>
          </div>
          <div class="underline">
            <div class="s-arrow_line"></div>
            <div class="s-arrow_diamond"></div>
          </div>
        </div>
        <div class="grow__content__numbers__description">
          <div class="grow__content__numbers__description--img">
            <img src="~assets/img/growing/grow-bot-pic.png" alt="tendency">
          </div>
          <div class="grow__content__numbers__description--slogan">
            <h4 class="s-basic slogan">{{$t('5747')}}</h4>
            <p class="sub-slogan">{{$t('5748')}}</p>
          </div>
        </div>

        <div class="grow__content__opportunity">
          <div class="grow__content__opportunity__description">
            <div class="description" v-html="$t('5749')">
              <!--<p>Opportunitiess for your bussiness are big.</p>-->
              <!--<p>Gain traffic low in Google with 6 billion search queries for each day.</p>-->
              <!--{{$t('5749')}}-->
            </div>
          </div>
          <div class="grow__content__opportunity--button">
            <s-button type="primary"
                      element="a"
                      target="_blank"
                      href="https://sites.fastspring.com/semalt/order/confirm"
                      class="button"
                      animation="pulse"
                      @click="onCleverJump('start-your-trial-button')"
                      size="large"

            >
              <div v-html="$t('5622')"/>
            </s-button>
          </div>
        </div>
      </div>
    </div>
    <img src="~assets/img/growing/bottom-arrow-big.png" alt="arrow" class="arrow-big">
    <img src="~assets/img/growing/bottom-man.png" alt="man" class="man">
    <img src="~assets/img/growing/bottom-trees.png" alt="trees" class="trees">
  </div>
</template>

<script>
export default {
	name: "TrialGrowing",

	data() {
		return {}
	},
	methods: {
		onCleverJump(i) {
			CleverJump.hit('click', 'autoseo-trial-' + i)
		}
	}
}
</script>

<style lang="less" scoped>

/*/deep/ .blue-bg {*/
/*background: #4b79bb;*/
/*color : #ffffff;*/
/*}*/

.grow {
  padding-top : 100px;
  position    : relative;
  z-index     : 9999;
  .grow-bg-bot {
    height     : 260px;
    background : #e9ecf5;
    width      : 100%;
    position   : absolute;
    bottom     : 0;
    z-index    : 1;
  }
  .grow__content {
    &--title {
      text-align    : center;
      margin-bottom : 60px;
      .title {
        margin-top : 0;
        color      : #000;
      }
    }
    &__graphs {
      display         : flex;
      justify-content : space-between;
      align-items     : center;
      .graphs-img {
        img {

        }
      }
      .graphs__links {
        .links {
          list-style-type       : none;
          margin                : 0;
          position              : relative;
          background            : #e9ecf5;
          -webkit-border-radius : 16px;
          -moz-border-radius    : 16px;
          border-radius         : 16px;
          padding               : 60px 20px 40px;
          &:after {
            content               : '';
            position              : absolute;
            top                   : -50px;
            left                  : calc(50% - 50px);
            background            : url("~assets/img/growing/clip.png") 50% no-repeat;
            height                : 100px;
            width                 : 100px;
            background-color      : #ffffff;
            -webkit-border-radius : 50%;
            -moz-border-radius    : 50%;
            border-radius         : 50%;
          }
          .source {
            font-size : 14px;
            color     : #093547;
          }
          .link--item {
            a {
              font-size   : 14px;
              line-height : 26px;
              color       : #4b79bb;
            }
          }
        }
      }
    }
    .graphs--text {
      width         : 65%;
      margin-bottom : 70px;
      .text {
        font-size     : 14px;
        line-height   : 24px;
        margin-bottom : 0;
        color         : #093547;
        /deep/ a {
          color : #4b79bb;
        }
      }
    }
    &__numbers {
      background            : #f2f4fa;
      -webkit-border-radius : 16px;
      -moz-border-radius    : 16px;
      border-radius         : 16px;
      display               : flex;
      justify-content       : center;
      padding               : 60px 0 40px;
      align-items           : center;
      position              : relative;
      margin-bottom         : 50px;
      z-index               : 9999;
      .top--img {
        position : absolute;
        right    : 40px;
        top      : -120px;
        img {
          height : 200px;
        }
      }
      &--img {
        margin-right    : 50px;
        width           : 40%;
        display         : flex;
        justify-content : center;
        img {

        }
      }
      &--right {
        width : 50%;
        &--title {
          .title {
            font-size    : 25px;
            padding-left : 60px;
            position     : relative;
            &:before {
              position    : absolute;
              content     : '\f1ec';
              left        : 0;
              font-family : 'Font Awesome 5 free';
              color       : #4b79bb;
            }
          }
        }
        &__list {
          list-style-type : none;
          padding-left    : 30px;
          position        : relative;
          &:after {
            content    : '';
            position   : absolute;
            background : url("~assets/img/growing/border-red.png") no-repeat;
            height     : 95%;
            width      : 100px;
            left       : 0;
            bottom     : 0;
            display    : inline-block;
          }
          &--item {
            font-size   : 16px;
            line-height : 30px;
            color       : #093547;
            font-family : 'Open Sans';
            display     : flex;
            /deep/ .time {
              width       : 40%;
              font-family : "Open Sans";
              font-size   : 16px;
              line-height : 30px;
            }
            /deep/ .equally {
              margin-right : 30px;
              font-family  : "Open Sans";
            }
            /deep/ .number {
              font-weight : 800;
              font-family : "Open Sans";
              font-size   : 16px;
              line-height : 30px;
            }

            /*.item--left {*/
            /*display: flex;*/
            /*width: 190px;*/
            /*}*/
            /*.item--right {*/
            /*display: flex;*/
            /*justify-content: flex-start;*/
            /*}*/
            /*strong {*/
            /*color: #093547;*/
            /*font-weight: 800;*/
            /*font-family: 'Open Sans';*/
            /*}*/
          }
        }
      }
      .underline {
        position : absolute;
        bottom   : 0;
        .s-arrow_diamond {
          background : #f2f4fa;
        }
      }
      &__description {
        text-align : center;
        position   : relative;
        z-index    : 9999;
        &--slogan {
          .slogan {
            margin-bottom : 0;
            z-index       : 100;
          }
          .sub-slogan {
            font-size   : 16px;
            line-height : 24px;
            color       : #093547;
            margin-top  : 0;
          }
        }
      }
    }

    &__opportunity {
      position       : relative;
      z-index        : 9999;
      margin-top     : 140px;
      padding-bottom : 70px;
      display        : flex;
      flex-direction : column;
      align-items    : center;
      &__description {
        text-align : left;
        margin     : 0 auto;
        z-index    : 100;
        .description {
          display        : flex;
          flex-direction : column;
          align-items    : flex-start;
          /deep/ p {
            margin       : 0;
            font-size    : 16px;
            line-height  : 24px;
            color        : #093547;
            font-family  : 'Open Sans';
            padding-left : 250px;
          }
        }
      }

      &--button {
        margin-top : 45px;
        position   : relative;
        .button {
          font-size   : 18px;
          line-height : 30px;
          div {
            font-family : "Open Sans";
          }
        }
        &:before {
          content    : '';
          position   : absolute;
          left       : -30px;
          top        : -50px;
          background : url("~assets/img/growing/bottom-arrow-red.png") no-repeat;
          width      : 50px;
          height     : 50px;
        }
        /*.button {*/
        /*color: #ffffff;*/
        /*background: #f1244a;*/
        /*padding: 5px 30px;*/
        /*-webkit-border-radius: 6px;*/
        /*-moz-border-radius: 6px;*/
        /*border-radius: 6px;*/
        /*text-decoration: none;*/
        /*font-weight: bold;*/
        /*font-size: 18px;*/
        /*line-height: 30px;*/
        /*}*/
      }
    }
  }
  .arrow-big {
    position : absolute;
    right    : 10%;
    bottom   : 10%;
    z-index  : 9999;
  }
  .man {
    position : absolute;
    bottom   : 0;
    left     : 17%;
    z-index  : 1;
  }
  .trees {
    position : absolute;
    bottom   : 0;
    left     : 15%;
    z-index  : 9999;
  }
}

@media only screen and (max-width : 992px) {
  .grow {
    .grow-bg-bot {
      height     : 320px;
      background : #e9ecf5;
      width      : 100%;
      position   : absolute;
      bottom     : 0;
      z-index    : 1;
    }
    .grow__content {
      display        : flex;
      flex-direction : column;
      align-items    : center;
      &--title {
        text-align    : center;
        margin-bottom : 60px;
        .title {
          font-size : 36px;
        }
      }
      &__graphs {
        flex-direction : column;
        .graphs-img {
          width : 90%;
          img {
            width : 100%;
          }
        }
        .graphs__links {
          display : none;
        }
      }
      .graphs--text {
        width         : 80%;
        margin-bottom : 70px;
        text-align    : center;
      }
      &__numbers {
        flex-direction        : column;
        align-items           : center;
        width                 : 100%;
        -webkit-border-radius : 0;
        -moz-border-radius    : 0;
        border-radius         : 0;
        padding               : 0;
        margin-top            : 60px;
        .top--img {
          display : none;
        }
        &--img {
          margin-right    : 0;
          margin-top      : -100px;
          justify-content : center;
          img {

          }
        }
        &--right {
          width          : 90%;
          display        : flex;
          flex-direction : column;
          align-items    : center;
          &--title {
            text-align : center;
            .title {
              font-size    : 25px;
              padding-left : 0;
              position     : relative;
              font-weight  : bold;
              color        : #093547;
              &:before {
                display : none;
              }
            }
          }
          &__list {
            list-style-type : none;
            padding-left    : 0px;
            position        : relative;
            margin-bottom   : 50px;
            width           : 90%;
            &:after {
              display : none;
            }
            &--item {
              font-size   : 16px;
              line-height : 30px;
              color       : #093547;
              font-family : 'Open Sans';
              margin-left : 20%;
              /deep/ .time {
                width       : 50%;
                font-family : "Open Sans";
                font-size   : 16px;
                line-height : 30px;
              }
              /deep/ .equally {
                margin-left  : 15px;
                margin-right : 30px;
                font-family  : "Open Sans";
              }
              /deep/ .number {
                font-weight : 800;
                font-family : "Open Sans";
                font-size   : 16px;
                line-height : 30px;
              }

              /*.item--left {*/
              /*display: flex;*/
              /*width: 190px;*/
              /*}*/
              /*.item--right {*/
              /*display: flex;*/
              /*justify-content: flex-start;*/
              /*}*/
              /*strong {*/
              /*color: #093547;*/
              /*font-weight: 800;*/
              /*font-family: 'Open Sans';*/
              /*}*/
            }
          }
        }
        .underline {
          position : absolute;
          bottom   : 0;
          .s-arrow_diamond {
            background : #f2f4fa;
          }
        }
        &__description {
          margin-bottom : 50px;
          position      : relative;
          &--slogan {
            .slogan {
              font-size : 18px;
              color     : #093547;
            }
          }
        }
      }

      &__opportunity {
        position       : relative;
        z-index        : 9999;
        margin-top     : 140px;
        padding-bottom : 70px;
        display        : flex;
        flex-direction : column;
        align-items    : center;
        &__description {
          text-align : center;
          width      : 80%;
          &:before {
            content                 : '';
            position                : absolute;
            top                     : -58%;
            left                    : calc(50% - 45px);
            background              : url("~assets/img/growing/bottom-man.png") no-repeat;
            -webkit-background-size : 100%;
            background-size         : 100%;
            height                  : 125px;
            width                   : 90px;
          }
          .description {
            align-items : center;
            /deep/ p {
              padding-left : 0;
              font-size    : 16px;
              line-height  : 24px;
            }
          }
        }

        &--button {
          &:before {
            content    : '';
            position   : absolute;
            left       : -40px;
            top        : -60px;
            background : url("~assets/img/growing/bottom-arrow-red.png") no-repeat;
            width      : 50px;
            height     : 50px;
          }
          .button {
          }
        }
      }
    }
    .arrow-big {
      display : none;
    }
    .man {
      display : none;
      /*position: absolute;*/
      /*bottom: 271px;*/
      /*left: calc(40%-35px);*/
      /*z-index: 9999;*/
      /*height: 182px;*/
    }
    .trees {
      display : none;
    }
  }
}

@media only screen and (max-width : 480px) {
  .grow {
    padding-top : 10px;
    .grow__content {
      .graphs--text {
        margin-bottom : 30px;
        .text {
          font-size : 16px;
        }
      }
      &__numbers {
        &--img {
          margin-top : -70px;
          img {
            height : 150px;
          }
        }
        &--right {
          &__list {
            &:after {
              display : none;
            }
            &--item {
              flex-direction : column;
              margin-left    : 35%;
              margin-bottom  : 30px;
              text-align     : left;
              /deep/ .time {
                width       : auto;
                font-family : "Open Sans";
                font-size   : 16px;
                line-height : 30px;
              }
              /deep/ .equally {
                display : none;
              }
              /deep/ .number {
                font-weight : 800;
                font-family : "Open Sans";
                font-size   : 16px;
                line-height : 30px;
              }

              /*.item--left {*/
              /*width : 100%;*/
              /*}*/
              /*.item--right {*/
              /*width : 100%;*/
              /*.is {*/
              /*display : none;*/
              /*}*/
              /*.margin {*/
              /*margin-right : 0 !important;*/
              /*}*/
              /*}*/
            }
          }
        }
      }
      &__opportunity {
        &__description {
          &:before {
            content         : '';
            position        : absolute;
            top             : -78%;
            left            : calc(50% - 65px);
            background      : url("~assets/img/growing/bottom-man.png") no-repeat;
            background-size : 130px;
            height          : 180px;
            width           : 150px;
          }
        }
      }
    }
  }
}
</style>