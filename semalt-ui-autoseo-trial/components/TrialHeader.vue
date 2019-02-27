<template>
  <div class="header">
    <!--<img src="~assets/img/head/tilds.png" alt="tilds" class="tilds-one">-->
    <!--<img src="~assets/img/head/tilds.png" alt="tilds" class="tilds-two">-->
    <!--<img src="~assets/img/head/bush.png" alt="bush" class="bush">-->
    <div class="container">
      <div class="header__content">
        <div class="header__content--title">
          <div class="s-basic title" v-html="$t('5613')"></div>
          <!--<h3 class="s-basic subtitle">with Semalt <span class="red-bg">SEO Platform</span></h3>-->
        </div>
        <div class="header__content--flex">
          <div class="header__content--flex__left">
            <div class="header__content--flex__left--list">
              <ul class="list s-basic">
                <li class="list--item" v-html="$t('5614')" v-s-smooth-scroll="'#trial-growing'"></li>
                <!--<a href="javascript:;" class="increase">Increase</a> your visitors with SEO technology</li>-->
                <li class="list--item" v-html="$t('5615')"  v-s-smooth-scroll="'#trial-proofs'"></li>
                <!--<a href="javascript:;" class="sell">Sell</a> on Google at any location and language</li>-->
                <li class="list--item" v-html="$t('5616')" v-s-smooth-scroll="'#undertabs'"></li>
                <!--<a href="javascript:;" class="test">Test</a> SEO quality 30 days for $0.99 - Best deal in the market</li>-->
              </ul>
            </div>

            <div class="header__content__left--diagram">
              <img src="~assets/img/head/diagram.png" alt="diagram">
            </div>
          </div>
          <div class="header__content--flex__right">
            <div class="header__content--flex__right__form" id="trial">
              <div class="header__content--flex__right__form--title">
                <div class="hello"
                     v-if="isLogin">
                  <span>{{$t('5617')}} {{ userData.username }}</span>
                </div>
                <h3 class="title s-basic">{{$t('5618')}}</h3>
                <p class="s-basic subtitle">{{$t('5619')}}</p>
              </div>
              <!--Logged in-->
              <form v-if="isLogin" class="header__content--flex__right__form--input" @submit.prevent>
                <div class="for-website for-input">
                  <s-group  class="form-group"
                            :has-error="websiteError"
                            error-text="Enter correct website">
                    <s-select-sites v-model="website" ref="selectSites" :items="sites" @success="pushSite"/>
                  </s-group>
                </div>
              </form>

              <!--Non Logged In-->
              <form v-else class="header__content--flex__right__form--input" @submit.prevent>
                <div class="for-name for-input">

                  <s-group class="form-group" :has-error="nameError" :error-text="errorNameText">
                    <s-input id="name" v-model="name"/>
                    <s-label v-if="!name" for="name">Name<span style="color: red">*</span></s-label>
                  </s-group>

                </div>
                <br>
                <div class="for-email for-input">

                  <s-group class="form-group" :has-error="emailError" :error-text="errorEmailText">
                    <s-input id="email" type="email" v-model="email"/>
                    <s-label v-if="!email" for="email">E-mail<span style="color: red">*</span></s-label>
                  </s-group>

                </div>
                <br>
                <div class="for-website for-input">
                  <!--<s-group  class="form-group"-->
                            <!--v-if="isLogin&&sites.length"-->
                            <!--:has-error="websiteError"-->
                            <!--error-text="Enter correct website">-->
                    <!--<s-select-sites v-model="website" ref="selectSites" :items="sites" @success="pushSite"/>-->
                  <!--</s-group>-->

                  <s-group class="sites-width flex"  :has-error.sync="error"
                           :error-text="errorSite">
                    <!--v-else-->
                    <s-input v-model="website" />
                    <s-label v-if="!website" for="website">Website<span style="color: red">*</span></s-label>
                    <!--@keyup.enter="submit"-->
                  </s-group>
                </div>
              </form>


              <div class="header__content--flex__right__form--button">
                <s-button element="a"
                          v-on:click="setData"
                          class="button header"
                          animation="pulse"
                >
                  <div v-html="$t('5622')"/>
                </s-button>
              </div>
              <hr>
              <div class="header__content--flex__right__form__footer">
                <div class="header__content--flex__right__form__footer--slogan">
                  <div class="slogan flex flex-center flex-middle">
                    <a href="https://d.semalt.com/testimonials/" target="_blank"><i class="fas fa-thumbs-up"></i></a>
                    <h4 v-html="$t('5629')"></h4>
                    <!--Trusted by <span class="blue-text">8K</span> website owners-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header__content--description">
          <p class="description s-basic" v-html="$t('5630')"></p>
        </div>
      </div>
    </div>

    <div class="header--bg"></div>
  </div>
</template>

<script>

import axios from 'axios'


export default {
	name: "TrialHeader",

	data() {
		return {
			email: '',
			name: '',
			website: '',
			result: {},
			error: false,
			errorSite: '',

			sites: [],
      user: {},

			nameError: false,
			emailError: false,
			websiteError: false,
			websiteNonLogError: false,
			errorNameText: '',
			errorEmailText: '',
			input: '',
			subtitles: {
				5613: [
					'using Semalt SEO Platform',
					''
				]
			},
		}
	},

	methods: {
		setData() {
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			};
			this.validateInputName()
			this.validateInputEmail()
			this.validateInputWebsite()
			if (!this.websiteError && !this.emailError && !this.nameError) {
				axios.post('/api/v1/create/messages/default', {
					email: this.email,
					name: this.name,
					website: this.website.site,
					controller: location.href,
					referrer: document.referrer
				}, config)
					.then(() => {
						CleverJump.hit('click', 'autoseo-trial-header-form-button')

					})
					.catch(() => {
						this.showFail = true
					})
			}
		},

		validateInputName() {
			this.nameError = false
			const res = !this.$frontend.validate.empty(this.name)

			if (res !== true) {
				this.nameError = true
				this.errorNameText = this.$t('5776')
			}
		},


		validateInputEmail() {
			this.emailError = false

			const res = this.$frontend.validate.email(this.email)

			if (res !== true ) {
				this.emailError = true
				this.errorEmailText = res
			}
		},

    validateInputWebsite() {

	    this.websiteError = false


	    const site = typeof this.website === 'object' ? this.website.site : this.website
	    this.error = !this.website

	    if(this.error) {
		    this.errorSite = this.$t(6538)
		    return
	    }

	    this.error = !this.$frontend.regex.website(site)

	    if (this.error) {
		    this.errorSite  = this.$t(6539)
		    return
	    }

    },

		pushSite(site) {
			// Send axios request
			this.website = {site}
			this.sites.push(this.website)
			this.$refs.selectSites.close()
		},
		// cb(item, index) {
		// 	return item.site
		// }

	},

	watch: {
		name() {
			this.validateInputName()
		},
		email() {
			this.validateInputEmail()
		},
	},

	created() {
		this.name = this.userData.username || ''
		this.email = this.userData.email || ''

    // this.login = this.$store.state.user.login
		// console.log('name: ', this.name)

		// Get sites from axios
		setTimeout(() => {
			// this.sites =
		}, 3000)

		if (this.isLogin) {
			axios.get(`/api/v1/get/user/me/sites/prim_unique?scopes=site`)
			// https://semalt.com
				.then(response => {
					if (response.data.error === null) {
						this.sites = response.data.result.sites,
							this.website = this.sites.site
					}
				})
		}

	},

	computed: {
		isLogin() {
			return this.$store.state.user.login
		},
    userData() {
      return this.$store.state.user.userData
    }
	},
}
</script>

<style lang="less" scoped>

/*/deep/ .blue-bg {*/
  /*background : #4b79bb;;*/
  /*color      : #ffffff;*/
/*}*/

/deep/ .text-type5 {
  color : #4b79bb;
}

.header {
  position              : relative;
  color                 : #093547;
  background            : url("~assets/img/head/tilds.png") 0 50% no-repeat,
  url("~assets/img/head/tilds.png") 100% 50% no-repeat;
  background-attachment : fixed;
  z-index               : 100;
  padding-top           : 50px;
  .bush {
    position : absolute;
    bottom   : 0;
    left     : 5%;
  }
  .tilds-one {
    position : absolute;
    left     : 0;
  }
  .tilds-two {
    position : absolute;
    right    : 0;
  }
  .header--bg {
    height                : 380px;
    background            : #f2f4fa url("~assets/img/head/bush.png") 0% 100% no-repeat;
    background-attachment : fixed;
    position              : absolute;
    left                  : 0;
    right                 : 0;
    bottom                : 0;
    z-index               : -1;
  }
  &__content {
    padding-bottom : 30px;
    &--title {
      z-index  : 1000;
      position : relative;
      .hello {
        span {
          font-size: 14px;
          font-weight: 300;
          font-style: italic;
          margin-bottom: 30px;
          color: #818f99;
          white-space: nowrap;
          font-family: Raleway;
          text-align: center;
        }
      }
      .title {
        margin-top    : 0;
        margin-bottom : 0;
        font-size     : 52px;
        line-height   : 60px;
        color         : #093547;
        font-weight   : 800;
        /deep/ h3 {
          font-size  : 36px;
          margin-top : 10px;
        }
      }
      .subtitle {
        font-size   : 36px;
        line-height : 60px;
        margin-top  : 0;
        font-weight : bold;
        color       : #093547;
      }
    }
    &--flex {
      height          : auto;
      display         : flex;
      justify-content : space-between;
      /*flex-wrap : wrap;*/
      &__left {
        display         : flex;
        flex-direction  : column;
        justify-content : space-around;
        z-index         : 9999;
        width           : 47%;
        &--list {
          .list {
            margin-bottom : 70px;
            .list--item {
              font-size   : 16px;
              line-height : 20px;
              color       : #093547;
              font-family : "Open Sans";
              /deep/ .link-blue {
                text-decoration : none;
                color           : #4b79bb;
                font-size       : 16px;
                font-weight     : bold;
                line-height     : 20px;
                font-family     : "Open Sans";
              }
            }
          }
        }
      }
      &__right {
        z-index : 9999;
        width   : 45%;
        &__form {
          background            : #ffffff;
          border                : 1px solid #f2f4fa;
          -webkit-box-shadow    : 0 0 20px 5px #e2e3e7;
          -moz-box-shadow       : 0 0 20px 5px #e2e3e7;
          box-shadow            : 0 0 20px 5px #e2e3e7;
          -webkit-border-radius : 16px;
          -moz-border-radius    : 16px;
          border-radius         : 16px;
          padding               : 40px;
          text-align            : center;
          position              : relative;
          width                 : 100%;
          &:after {
            content    : '';
            position   : absolute;
            bottom     : -3px;
            left       : calc(50% - 112px);
            height     : 3px;
            width      : 225px;
            background : red;
          }
          &:before {
            content                 : '';
            position                : absolute;
            top                     : -105px;
            right                   : -11px;
            background              : url('~assets/img/head/form-girl.png') no-repeat;
            -webkit-background-size : 115px;
            background-size         : 100px;
            height                  : 170px;
            width                   : 120px;

          }
          /deep/ .s-group {
            width : 100%;
            .s-label {
              position : absolute;
              left     : 15px;
              top      : 10px;
              color    : #b0b5c0;
            }
          }
          &--title {
            .title {
              margin-top    : 0;
              margin-bottom : 0;
              font-size     : 25px;
              line-height   : 29px;
              color         : #093547;
              font-weight   : 700;
            }
            .subtitle {
              margin-top     : 0;
              margin-bottom  : 30px;
              font-size      : 16px;
              line-height    : 29px;
              font-weight    : normal;
              letter-spacing : 0.03em;
              color          : #093547;
            }
          }
          &--button {
            max-width : 350px;
            margin    : 50px auto 40px;
            display   : inline-block;
            .button {
              color                 : #ffffff;
              background            : #f1244a;
              padding               : 10px 30px;
              -webkit-border-radius : 6px;
              -moz-border-radius    : 6px;
              border-radius         : 6px;
              font-size             : 16px;
              div {
                font-family : "Open Sans";
              }
            }
          }
          hr {
            width         : 100%;
            border-top    : none;
            border-left   : none;
            border-right  : none;
            border-bottom : 2px solid #eef1f9;
          }
          &__footer {
            margin-top : 10px;
            &--slogan {
              .slogan {
                font-size      : 18px;
                letter-spacing : 0.03em;
                font-family    : 'Raleway';
                margin-bottom  : 0;
                flex-direction : column;
                i {
                  background            : #f2f4fa;
                  line-height           : 40px;
                  height                : 40px;
                  width                 : 40px;
                  -webkit-border-radius : 50%;
                  -moz-border-radius    : 50%;
                  border-radius         : 50%;
                  color                 : #194866;
                }
              }
            }
          }
        }
      }
    }
    &--description {
      margin-top : 30px;
      text-align : center;
      z-index    : 9999;
      .description {
        font-size     : 16px;
        line-height   : 24px;
        color         : #000;
        margin-bottom : 0;
        z-index       : 9999;
      }
    }
  }
}

.blue-text {
  color : #4b79bb;
}

h1.s-basic {
  font-size   : 52px;
  line-height : 60px;
}

a {
  text-decoration : none;
  color           : #4b79bb;
  font-size       : 16px;
  font-weight     : bold;
  line-height     : 20px;
}

.red-bg {
  background : #f1244a;
  color      : #ffffff;
}

.for-input {
  position : relative;
}

input {
  height             : 40px;
  background-color   : #e9ecf5;
  color              : #093547;
  outline            : 0;
  padding            : 0 15px;
  margin             : 0;
  border             : 1px solid transparent;
  border-radius      : 6px;
  width              : 100%;
  font-size          : 14px;
  -webkit-transition : .2s;
  transition         : .2s;
}

input + label {
  color             : #999;
  font-size         : 16px;
  position          : absolute;
  left              : 15px;
  top               : 50%;
  -webkit-transform : translateY(-50%);
  -moz-transform    : translateY(-50%);
  -ms-transform     : translateY(-50%);
  -o-transform      : translateY(-50%);
  transform         : translateY(-50%);
}

input + label:after {
  content : '*';
  color   : #f1244a;
}

input:focus + label {
  display : none;
}

@media only screen and (max-width : 992px) {
  .header {
    &__content {
      &--title {
        text-align : center;
      }
      &--flex {
        flex-direction : column;
        align-items    : center;

        &__left {
          /*order : 2;*/
          display         : flex;
          flex-direction  : row;
          justify-content : space-between;
          width           : 100%;
          max-width       : 728px;
          margin-top      : 50px;
        }
        &__right {
          /*order : 1;*/
          width : unset;
          &__form {
            &:before {
              right : 70%;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width : 768px) {
  .header {
    .header--bg {
      height : 80%;
    }
    &__content {
      &--title {
        text-align : center;
        .title {
          font-size   : 36px;
          line-height : 45px;
          color       : #093547;
        }
        .subtitle {
          font-size   : 25px;
          line-height : 45px;
          margin-top  : 0;
          font-weight : bold;
        }
      }
      &--flex {
        display        : flex;
        flex-direction : column;
        align-items    : center;
        &__left {
          margin-top     : 50px;
          align-items    : center;
          display        : flex;
          flex-direction : column;
          z-index        : 9999;
          order          : 2;
          &--list {
            width : 90%;
            .list {
              margin-bottom : 50px;
            }
          }
          .header__content__left--diagram {
            width : 90%;
            img {
              width : 100%;
            }
          }
        }
        &__right {
          z-index  : 9999;
          width    : 100%;
          position : relative;
          &__form {
            -webkit-border-radius : 0;
            -moz-border-radius    : 0;
            border-radius         : 0;
            position              : relative;
            display               : flex;
            flex-direction        : column;
            align-items           : center;
            &:before {
              display : none;
            }
            &--input {
              width : 80%;
            }
            &--title {
              .title {
                margin-top    : 0;
                margin-bottom : 15px;
                font-size     : 25px;
                line-height   : 29px;
                color         : #093547;
              }
              .subtitle {
                color : #093547;
              }
            }
            &--button {
              margin-top    : 30px;
              margin-bottom : 40px;
              .button {
                color                 : #ffffff;
                background            : #f1244a;
                padding               : 10px 20px;
                -webkit-border-radius : 6px;
                -moz-border-radius    : 6px;
                border-radius         : 6px;
              }
            }
            &__footer {
              &--slogan {
                .slogan {
                  color : #093547;
                }
              }
            }
          }
        }
      }
      &--description {
        margin-top : 30px;
        text-align : center;
        z-index    : 9999;
        .description {
          font-size     : 16px;
          line-height   : 24px;
          color         : #000;
          margin-bottom : 0;
          z-index       : 9999;
        }
      }
    }

    .tilds-one,
    .tilds-two,
    .bush {
      display : none;
    }
  }
}

/*@media only screen and (max-width: 480px) {*/
/*.header {*/
/*.header--bg {*/
/*height: 80%;*/
/*}*/
/*&__content {*/
/*&--title {*/
/*text-align: center;*/
/*.title {*/
/*font-size: 36px;*/
/*line-height: 45px;*/
/*color: #093547;*/
/*}*/
/*.subtitle {*/
/*font-size: 25px;*/
/*line-height: 45px;*/
/*margin-top: 0;*/
/*font-weight: bold;*/
/*}*/
/*}*/
/*&--flex {*/
/*display: flex;*/
/*flex-direction: column;*/
/*align-items: center;*/
/*&__left {*/
/*margin-top: 50px;*/
/*align-items: center;*/
/*z-index: 9999;*/
/*order: 2;*/
/*&--list {*/
/*width: 90%;*/
/*.list {*/
/*margin-bottom: 50px;*/
/*}*/
/*}*/
/*.header__content__left--diagram {*/
/*width: 90%;*/
/*img {*/
/*width: 100%;*/
/*}*/
/*}*/
/*}*/
/*&__right {*/
/*z-index: 9999;*/
/*width: 100%;*/
/*position: relative;*/
/*&__form {*/
/*-webkit-border-radius: 0;*/
/*-moz-border-radius: 0;*/
/*border-radius: 0;*/
/*position: relative;*/
/*&--title {*/
/*.title {*/
/*margin-top: 0;*/
/*margin-bottom: 15px;*/
/*font-size: 25px;*/
/*line-height: 29px;*/
/*color: #093547;*/
/*}*/
/*.subtitle {*/
/*color: #093547;*/
/*}*/
/*}*/
/*&--button {*/
/*margin-top: 30px;*/
/*margin-bottom: 40px;*/
/*.button {*/
/*color: #ffffff;*/
/*background: #4b79bb;*/
/*padding: 10px 20px;*/
/*-webkit-border-radius: 6px;*/
/*-moz-border-radius: 6px;*/
/*border-radius: 6px;*/
/*}*/
/*}*/
/*hr {*/
/*position: absolute;*/
/*width: 100%;*/
/*border: none;*/
/*border-bottom: 2px solid #eef1f9;*/
/*bottom: 100px;*/
/*left: 0;*/
/*}*/
/*&__footer {*/
/*&--slogan {*/
/*.slogan {*/
/*color: #093547;*/
/*}*/
/*}*/
/*}*/
/*}*/
/*}*/
/*}*/
/*&--description {*/
/*margin-top: 30px;*/
/*text-align: center;*/
/*z-index: 9999;*/
/*.description {*/
/*font-size: 16px;*/
/*line-height: 24px;*/
/*color: #000;*/
/*margin-bottom: 0;*/
/*z-index: 9999;*/
/*}*/
/*}*/
/*}*/
/*}*/
/*}*/


</style>
