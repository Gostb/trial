<template>
  <div class="question">
    <div class="container">
      <div class="question--title">
        <h3 class="s-basic title">{{$t('6548')}}</h3>
        <p class="subtitle">{{$t('6549')}}</p>
      </div>
      <div class="question__form">
        <s-manager
               ref="manager"
               :loading="loading"
               @click="loading = true"
               v-bind="attrs">
          <s-form
                 v-model="loading"
                 :form="form"
                 @success="onSuccess"/>
        </s-manager>

        <s-dialog-success v-model="showSuccess"/>

      </div>
    </div>
    <hr>
    <div class="container">
      <div class="question__footer">
        <div class="question__footer--icon">
          <i class="fas fa-phone-square"></i>
        </div>
        <div class="question__footer--description">
          <p class="description">{{$t('6574')}}</p>
        </div>
        <div class="question__footer--icon-bot">
          <i class="fas fa-caret-down"></i>
        </div>
        <div class="question__footer--phone-numbers">
          <div class="buttons">
            <div class="button flex flex-middle flex-center">
              <a href="tel:+1-855-979-6663" class="flex flex-middle flex-center">
                <div class="country">USA:</div>
                <div class="number">+1-855-979-6663</div>
              </a>
              <i class="fas fa-caret-down" ref="arrow"></i>
            </div>
            <div class="button2 flex flex-middle flex-center" ref="button">
              <a href="tel:+44-800-060-8429" class="flex flex-middle flex-center">
                <div class="country">UK:</div>
                <div class="number">+44-800-060-8429</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
	name: "TrialQuestion",

	data() {
		return {

			img: require('@semalt/frontend/public/img/people/andrew_timchenko.png'),
			buttonShow: false,
			close: true,
			showSuccess: false,
			show: true,
			website: '',
			message: '',
			errors: [],
			isRegistered: false,
			managerContacts: [
				{icon: 'fab fa-skype', value: 'TimchenkoAndrew', link: 'skype:TimchenkAndrew', external: true},
				{icon: 'fas fa-phone', value: '+1 (855) 979-6663', link: 'tel:+18559796663', external: true},
				{icon: 'fas fa-envelope', value: 'support@semalt-team', link: 'mailto:support@semalt-team', external: true}
			],

			loading: false,
			input: '',
			error: false,
			errorText: '',

			form: {
				name: {
					value: '',
					component: 's-input',
					placeholder: 'Name', // this.$t('1266')
					hasError: false,
					textError: '',
					validate: (val) => this.$frontend.validate.empty(val) ? 'Error' : true // this.$t('5380')
				},
				email: {
					value: '',
					component: 's-input',
					placeholder: 'Email', // this.$t('1267')
					hasError: false,
					textError: '',
					validate: (val) => this.$frontend.validate.email(val)
				},
				phone: {
					value: '',
					component: 's-input-tel',
					size: 'large',
					hasError: false,
					textError: '',
					validate: async (val) => await this.$frontend.validate.phone(val)
				},
				message: {
					value: '',
					component: 's-textarea',
					placeholder: 'Message', // this.$t('1269')
					rows: 2,
					hasError: false,
					textError: '',
					validate: (val) => this.$frontend.validate.empty(val) ? 'Error' : true // this.$t('4802')
				}
			}

		}
	},
	methods: {
		onSuccess() {
			if (!this.error) {
				const myData = {
					name: this.form.name.value,
					email: this.form.email.value,
					phone: this.form.phone.value,
					message: this.form.message.value
				}
				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				};
				axios.post('/api/v1/create/messages/default', myData, config).then((resp) => {
					//new.api.server00-vm15.semalt.local
					if (resp.error) return false;
					this.showSuccess = true;
					this.loading = false;
					this.form.message.value = ''
					CleverJump.hit('click', 'contacts-form-button')

				});
			}

			// See console
			// console.log(myData)
		},
	},
	computed: {
		attrs() {
			const result = {
				image: this.img
			}

			if (this.manager) {
				result.name = this.manager.name
				result.position = this.manager.position

				if (this.manager.img) {
					result.image = 'https://semalt.com/' + this.manager.img
				}

				if (this.contacts.length) {
					result.contacts = this.contacts
				}
			}

			return result
		},
		user() {
			return this.$store.state.user.userData
		},
		manager() {
			return this.$store.state.user.manager
		},
		contacts() {
			const arr = []

			if (this.manager.skype) {
				arr.push({
					icon: 'fab fa-skype',
					value: this.manager.skype,
					link: 'skype:' + this.manager.skype,
					external: true
				})
			}

			if (this.manager.phone) {
				arr.push({
					icon: 'fas fa-phone',
					value: this.manager.phone,
					link: 'tel:' + this.manager.phone,
					external: true
				})
			}

			if (this.manager.email) {
				arr.push({
					icon: 'fas fa-envelope',
					value: this.manager.email,
					link: 'mailto:' + this.manager.email,
					external: true
				})
			}

			return arr
		}
	},
	watch: {
		'$store.state.user.userData': {
			handler(val) {
				if (!val || typeof val !== 'object') {
					return
				}
				this.form.name.value = val.username || ''
				this.form.email.value = val.email || ''
				this.form.phone.value = val.tel || ''
			},
			immediate: true
		}
	},
	// beforeCreate () {
  //
	// 		this.$store.commit('user/SET_USERDATA', {
	// 						"id": 1676437,
	// 						"email": "starenchenko@semalt.com",
	// 						"tel": "+380956770517",
	// 						"username": "Maksym"
	// 					})
	// 	}
}
</script>

<style lang="less" scoped>

/deep/.s-manager {
  .s-manager-action {
    .s-btn {
      &:hover {
        background   : #4cbac0;
        border-color : #4cbac0;
      }
    }
  }
}

.question {
  padding-top    : 100px;
  text-align     : center;
  padding-bottom : 75px;
  &--title {
    margin-bottom : 75px;
    .title {
      font-size     : 36px;
      margin-bottom : 10px;
      font-weight   : 800;
      color         : #093547;
      margin-top    : 0;
    }
    .subtitle {
      font-size : 18px;
      color     : #093547;
    }
  }
  &__form {
    display        : flex;
    flex-direction : column;
    align-items    : center;
    /deep/ .s-manager {
      width : 60%;
      .s-manager__content {
        padding : 0 50px;
      }
    }
  }

  hr {
    border        : none;
    border-bottom : 1px solid #e9ecf5;
  }

  &__footer {
    margin-top     : 55px;
    display        : flex;
    flex-direction : column;
    align-items    : center;
    &--icon {
      height                : 50px;
      width                 : 50px;
      -webkit-border-radius : 50%;
      -moz-border-radius    : 50%;
      border-radius         : 50%;
      background            : #e9ecf5;
      text-align            : center;
      i {
        line-height : 50px;
        color       : #f1244a;
      }
    }
    &--description {
      .description {
        font-size   : 20px;
        font-weight : bold;
        color       : #093547;
      }
    }
    &--icon-bot {
      margin-bottom : 35px;
      i {
        color     : #f1244a;
        font-size : 20px;
      }
    }
    &--phone-numbers {
      .buttons {
        background            : #f1244a;
        -webkit-border-radius : 6px;
        -moz-border-radius    : 6px;
        border-radius         : 6px;
        height                : 40px;
        margin-bottom         : 40px;
        overflow              : hidden;
        -webkit-transition    : all .5s;
        -moz-transition       : all .5s;
        -ms-transition        : all .5s;
        -o-transition         : all .5s;
        transition            : all .5s;
        cursor                : pointer;
        &:hover {
          height        : 80px;
          margin-bottom : 0;
        }
        .button {
          background            : #f1244a;
          color                 : #fff;
          max-width             : 100%;
          -webkit-border-radius : 6px;
          -moz-border-radius    : 6px;
          border-radius         : 6px;
          padding               : 10px 20px;
          &:hover {
            i {
              -webkit-transform : rotate(-180deg);
              -moz-transform    : rotate(-180deg);
              -ms-transform     : rotate(-180deg);
              -o-transform      : rotate(-180deg);
              transform         : rotate(-180deg);
            }
          }
          a {
            text-decoration : none;
            color           : #fff;
            .country {
              margin-right : 9px;
              font-family  : "Segoe UI";
              font-size    : 16px;
            }
            .number {
              margin-right : 14px;
              font-family  : "Segoe UI";
              font-size    : 16px;
              font-weight  : 700;
            }
          }
          i {
            -webkit-transition : .5s;
            -moz-transition    : .5s;
            -ms-transition     : .5s;
            -o-transition      : .5s;
            transition         : .5s;
          }
        }
        .button2 {
          background            : #cc082d;
          color                 : #fff;
          max-width             : 100%;
          -webkit-border-radius : 6px;
          -moz-border-radius    : 6px;
          border-radius         : 6px;
          padding               : 10px 20px;
          a {
            text-decoration : none;
            color           : #fff;
            .country {
              margin-right : 9px;
              font-family  : "Segoe UI";
              font-size    : 16px;
            }
            .number {
              margin-right : 14px;
              font-family  : "Segoe UI";
              font-size    : 16px;
              font-weight  : 700;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width : 640px) {
  .question {
    padding-top : 30px;
    &__form {
      /deep/ .s-manager {
        width : 90%;
      }
    }
  }
}


</style>
