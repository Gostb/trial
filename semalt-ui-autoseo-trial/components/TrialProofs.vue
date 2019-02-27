<template>
  <div class="proofs">
    <div class="proofs--bg"></div>
    <img src="~assets/img/proofs/bush-right.png" class="bush" alt="bush">
    <img src="~assets/img/proofs/girl-left.png" class="girl-left" alt="bush">
    <div class="container">
      <div class="proofs__content">
        <div class="proofs__content--title">
          <h2 class="s-basic title">{{$t('5735')}}</h2>
        </div>
        <div class="proofs__content__video-block">
          <div class="proofs__content__video-block--item one">
            <div class="proofs__content__video-block--item__content one__content">
              <div class="proofs__content__video-block--item__content--video one__content--video"
                   @click="onCleverJump('small-video-1')">
                <div class="video" v-if="!show"
                     @click="openModal('xhuhn-iWh1U', 'youtube')">
                  <img src="~assets/img/proofs/play.png" class="youtube-btn" alt="play">
                </div>
                <s-dialog-video
                       v-model="show"
                       :type="type"
                       :id="id"
                       :action-button="onAction"
                />
                <!--<iframe v-else class="video-clip"-->
                <!--width="100%"-->
                <!--height="100%"-->
                <!--src="https://www.youtube.com/embed/2bFFB0jXOLw?autoplay=1&amp;"-->
                <!--frameborder="0"-->
                <!--allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"-->
                <!--allowfullscreen>-->
                <!--</iframe>-->
              </div>
              <div class="proofs__content__video-block--item__content--sphere one__content--sphere">
                <div class="sphere"><i class="fas fa-shopping-cart"></i>E-Commerece</div>
              </div>
              <div class="proofs__content__video-block--item__content--description one__content--description">
                <p class="description s-basic"><i class="fas fa-quote-right"></i>I am growing up the rankings.
                  I am getting more visits, inquiries to come in.
                  So, I am pretty excited about what's coming up...</p>
              </div>
              <div class="proofs__content__video-block--item__content__person one__content__person">
                <div class="proofs__content__video-block--item__content__person--name one__content__person--name">
                  <h5 class="name s-basic">Richard Sauerman,</h5>
                </div>
                <div class="proofs__content__video-block--item__content__person--position one__content__person--position">
                  <span class="position">CEO of the Brand Guy</span>
                  <p class="country">(Australia)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="proofs__content__video-block--item two">
            <div class="proofs__content__video-block--item__content two__content">
              <div class="proofs__content__video-block--item__content--video two__content--video"
                   @click="onCleverJump('small-video-2')">
                <div class="video" v-if="!show"
                     @click="openModal('9mxm9Fx2Lic', 'youtube')">
                  <img src="~assets/img/proofs/play.png" class="youtube-btn" alt="play">
                </div>
                <s-dialog-video
                       v-model="show"
                       :type="type"
                       :id="id"
                       :action-button="onAction"
                />
                <!--<iframe v-else class="video-clip"-->
                <!--width="100%"-->
                <!--height="100%"-->
                <!--src="https://www.youtube.com/embed/2bFFB0jXOLw?autoplay=1&amp;"-->
                <!--frameborder="0"-->
                <!--allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"-->
                <!--allowfullscreen>-->
                <!--</iframe>-->
              </div>
              <div class="proofs__content__video-block--item__content--sphere two__content--sphere">
                <div class="sphere"><i class="fas fa-notes-medical"></i>Medicine and Healthcare</div>
              </div>
              <div class="proofs__content__video-block--item__content--description two__content--description">
                <p class="description s-basic"><i class="fas fa-quote-right"></i>We have started with autoSEO and now
                  made
                  our way to FullSEO, of course. And the result are really impressive...</p>
              </div>
              <div class="proofs__content__video-block--item__content__person two__content__person">
                <div class="proofs__content__video-block--item__content__person--name two__content__person--name">
                  <h5 class="name s-basic">Steven Ralph,</h5>
                </div>
                <div class="proofs__content__video-block--item__content__person--position two__content__person--position">
                  <span class="position">Owner of mascotcostumes.org</span>
                  <p class="country">(USA)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="proofs__content__video-block--item three">
            <div class="proofs__content__video-block--item__content three__content">
              <div class="proofs__content__video-block--item__content--video three__content--video"
                   @click="onCleverJump('small-video-3')">
                <div class="video" v-if="!show"
                     @click="openModal('kqncJ2rCg1E', 'youtube')">
                  <img src="~assets/img/proofs/play.png" class="youtube-btn" alt="play">
                </div>
                <s-dialog-video
                       v-model="show"
                       :type="type"
                       :id="id"
                       :action-button="onAction"
                />
                <!--<iframe v-else class="video-clip"-->
                <!--width="100%"-->
                <!--height="100%"-->
                <!--src="https://www.youtube.com/embed/2bFFB0jXOLw?autoplay=1&amp;"-->
                <!--frameborder="0"-->
                <!--allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"-->
                <!--allowfullscreen>-->
                <!--</iframe>-->
              </div>
              <div class="proofs__content__video-block--item__content--sphere three__content--sphere">
                <div class="sphere"><i class="fas fa-shopping-cart"></i>E-Commerece</div>
              </div>
              <div class="proofs__content__video-block--item__content--description three__content--description">
                <p class="description s-basic"><i class="fas fa-quote-right"></i>It’s also important that Semalt
                  guys always keep in touch and are flexible to adjust to our needs.
                  We also used Semalt copywriting services…</p>
              </div>
              <div class="proofs__content__video-block--item__content__person three__content__person">
                <div class="proofs__content__video-block--item__content__person--name">
                  <h5 class="name s-basic">Ann,</h5>
                </div>
                <div class="proofs__content__video-block--item__content__person--position">
                  <span class="position">Manager of Marketing on Web</span>
                  <p class="country">(Australia)</p>
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
export default {
	name: "TrialProofs",
	data() {
		return {
			show: false,
			id: '',
			type: 'youtube',

		}
	},
	methods: {
		onCleverJump(i) {
			CleverJump.hit('click', 'autoseo-trial-' + i)
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
/deep/ .blue-bg {
  background : #4b79bb;
  color      : #ffffff;
}

.proofs {
  padding-top    : 100px;
  padding-bottom : 150px;
  position       : relative;
  &--bg {
    height     : 200px;
    width      : 100%;
    background : #e9ecf5;
    position   : absolute;
    bottom     : 0;
    z-index    : 1;
  }
  .bush {
    position : absolute;
    right    : 5%;
    bottom   : 200px;
  }
  .girl-left {
    position : absolute;
    left     : 2%;
    bottom   : 90px;
    z-index  : 99;
  }
  &__content {
    &--title {
      text-align    : center;
      margin-bottom : 60px;
      .title {
        font-size     : 36px;
        line-height   : 45px;
        color         : #093547;
        margin-top    : 0;
        margin-bottom : 0;
      }
    }
    &__video-block {
      display         : flex;
      justify-content : space-between;
      flex-wrap       : wrap;
      &--item {
        background            : #f2f4fa;
        -webkit-border-radius : 16px;
        -moz-border-radius    : 16px;
        border-radius         : 16px;
        width                 : 30%;
        display               : flex;
        flex-direction        : column;
        z-index               : 100;
        &__content {
          padding : 20px;
          &--video {
            min-height    : 160px;
            height        : 160px;
            margin-bottom : 25px;
            .youtube-btn {
              height             : 50px;
              margin-top         : 50px;
              -webkit-transition : .3s;
              -moz-transition    : .3s;
              -ms-transition     : .3s;
              -o-transition      : .3s;
              transition         : .3s;
              &:hover {
                cursor            : pointer;
                -webkit-transform : scale(1.1);
                -moz-transform    : scale(1.1);
                -ms-transform     : scale(1.1);
                -o-transform      : scale(1.1);
                transform         : scale(1.1);
              }
            }
            .video {
            }
          }
          &--sphere {
            display         : flex;
            justify-content : flex-end;
            .sphere {
              font-size : 14px;
              color     : #093547;
              i {
                font-size    : 14px;
                color        : #093547;
                margin-right : 20px;
              }
            }
          }
          &--description {
            display  : flex;
            position : relative;
            .description {
              font-size   : 16px;
              line-height : 24px;
              color       : #093547;
              text-align  : left;
              min-height  : 150px;

              i {
                background            : #ffffff;
                -webkit-border-radius : 50%;
                -moz-border-radius    : 50%;
                border-radius         : 50%;
                height                : 50px;
                width                 : 50px;
                color                 : #f1244a;
                font-size             : 20px;
                text-align            : center;
                line-height           : 50px;
                margin-left           : -40px;
                margin-right          : 20px;
              }
            }
          }
          &__person {
            text-align : center;
            &--name {
              .name {
                font-size     : 16px;
                line-height   : 24px;
                color         : #093547;
                font-weight   : bold;
                margin-bottom : 0;
              }
            }

            &--position {
              .position {
                font-size   : 16px;
                line-height : 24px;
                color       : #093547;
                margin-top  : 0;
              }
              .country {
                margin-top  : 0;
                font-size   : 16px;
                line-height : 24px;
                color       : #093547;
              }
            }
          }
        }
      }
      .one {
        &__content {
          &--video {
            text-align : center;
            background : url("~assets/img/proofs/video-bg-1.png");
            .video {
              .youtube-btn {
                height : 50px;
              }
            }
            .video-clip {

            }
          }
        }
      }
      .two {
        &__content {
          &--video {
            text-align : center;
            background : url("~assets/img/proofs/video-bg-2.png");
            .video {
              .youtube-btn {
                height : 50px;
              }
            }
            .video-clip {

            }
          }
        }
      }
      .three {
        &__content {
          &--video {
            text-align : center;
            background : url("~assets/img/proofs/video-bg-3.png");
            .video {
              .youtube-btn {
                height : 50px;
              }
            }
            .video-clip {

            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width : 1768px) {
  .girl-left {
    display : none;
  }

  .bush {
    /*display : none;*/
  }
}

@media only screen and (max-width : 1500px) {

  .bush {
    display : none;
  }
}

@media only screen and (max-width : 992px) {
  .proofs {
    padding-bottom : 50px;
    &--bg {
      display : none;
    }
    &__content {
      &__video-block {
        display         : flex;
        flex-direction  : column;
        justify-content : space-between;
        flex-wrap       : wrap;
        align-items     : center;
        &--item {
          width         : 85%;
          margin-bottom : 20px;
          &__content {
            padding : 40px;
            &--sphere {
              display         : flex;
              justify-content : flex-end;
              padding         : 0 25px;
              .sphere {
                font-size : 14px;
                color     : #093547;
                i {
                  font-size    : 14px;
                  color        : #093547;
                  margin-right : 20px;
                }
              }
            }
            &--description {
              display  : flex;
              position : relative;
              .description {
                font-size   : 16px;
                line-height : 24px;
                color       : #093547;
                text-align  : justify;
                min-height  : 100px;
                i {
                  margin-left : -60px;
                }

              }
            }
            &__person {
              text-align : center;
              &--name {
                .name {
                  font-size     : 16px;
                  line-height   : 24px;
                  color         : #093547;
                  font-weight   : bold;
                  margin-bottom : 0;
                }
              }

              &--position {
                .position {
                  font-size   : 16px;
                  line-height : 24px;
                  color       : #093547;
                  margin-top  : 0;
                }
                .country {
                  margin-top  : 0;
                  font-size   : 16px;
                  line-height : 24px;
                  color       : #093547;
                }
              }
            }
          }
        }
        .one {
          &__content {
            &--video {
              text-align              : center;
              background              : url("~assets/img/proofs/video-bg-1.png") center center no-repeat;
              -webkit-background-size : cover;
              background-size         : cover;
              .video {
                .youtube-btn {
                  height : 50px;
                }
              }
              .video-clip {

              }
            }
          }
        }
        .two {
          &__content {
            &--video {
              text-align              : center;
              background              : url("~assets/img/proofs/video-bg-2.png") center center no-repeat;
              -webkit-background-size : cover;
              background-size         : cover;
              .video {
                .youtube-btn {
                  height : 50px;
                }
              }
              .video-clip {

              }
            }
          }
        }
        .three {
          &__content {
            &--video {
              text-align              : center;
              background              : url("~assets/img/proofs/video-bg-3.png") center center no-repeat;
              -webkit-background-size : cover;
              background-size         : cover;
              .video {
                .youtube-btn {
                  height : 50px;
                }
              }
              .video-clip {

              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width : 480px) {
  .proofs {
    padding-top    : 30px;
    padding-bottom : 30px;
    &--bg {
    }
    &__content {
      &__video-block {
        &--item {
          &__content {
            &--sphere {
              justify-content : center;
              padding         : 0;
              .sphere {
                font-size : 14px;
                color     : #093547;
                i {
                  font-size    : 14px;
                  color        : #093547;
                  margin-right : 10px;
                }
              }
            }
            &--description {
              display  : flex;
              position : relative;
              .description {
                text-align : center;
                i {
                  margin-left : -60px;
                }

              }
            }
            &__person {
              text-align : center;
              &--name {
                .name {
                  font-size     : 16px;
                  line-height   : 24px;
                  color         : #093547;
                  font-weight   : bold;
                  margin-bottom : 0;
                }
              }

              &--position {
                .position {
                  font-size   : 16px;
                  line-height : 24px;
                  color       : #093547;
                  margin-top  : 0;
                }
                .country {
                  margin-top  : 0;
                  font-size   : 16px;
                  line-height : 24px;
                  color       : #093547;
                }
              }
            }
          }
        }
        .one {
          &__content {
            &--video {
              text-align              : center;
              background              : url("~assets/img/proofs/video-bg-1.png") no-repeat;
              -webkit-background-size : cover;
              background-size         : cover;
              .video {
                .youtube-btn {
                  height : 50px;
                }
              }
              .video-clip {

              }
            }
          }
        }
        .two {
          &__content {
            &--video {
              text-align              : center;
              background              : url("~assets/img/proofs/video-bg-2.png") no-repeat;
              -webkit-background-size : cover;
              background-size         : cover;
              .video {
                .youtube-btn {
                  height : 50px;
                }
              }
              .video-clip {

              }
            }
          }
        }
        .three {
          &__content {
            &--video {
              text-align              : center;
              background              : url("~assets/img/proofs/video-bg-3.png") no-repeat;
              -webkit-background-size : cover;
              background-size         : cover;
              .video {
                .youtube-btn {
                  height : 50px;
                }
              }
              .video-clip {

              }
            }
          }
        }
      }
    }
  }
}

</style>