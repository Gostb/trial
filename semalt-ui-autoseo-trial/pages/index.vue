<template>
  <div class="container-fluid no-gutter">
    <trial-header/>
    <trial-steps/>
    <trial-figures/>
    <trial-video/>
    <trial-websites/>
    <trial-benefits/>
    <trial-proofs id="trial-proofs"/>
    <trial-growing id="trial-growing"/>
    <trial-revenue/>
    <trial-question/>
  </div>
</template>

<script>

import TrialHeader from '~/components/TrialHeader'
import TrialSteps from '~/components/TrialSteps'
import TrialFigures from '~/components/TrialFigures'
import TrialVideo from '~/components/TrialVideo'
import TrialWebsites from '~/components/TrialWebsites'
import TrialBenefits from '~/components/TrialBenefits'
import TrialProofs from '~/components/TrialProofs'
import TrialGrowing from '~/components/TrialGrowing'
import TrialRevenue from '~/components/TrialRevenue'
import TrialQuestion from '~/components/TrialQuestion'


// import axios from 'axios'
//
// const API_QUESTION = 'https://semalt.com/api/v1/get/user?scopes=id,email,tel,username&manager=1'

export default {
	components: {
		TrialHeader,
		TrialSteps,
		TrialFigures,
		TrialVideo,
		TrialWebsites,
		TrialBenefits,
		TrialProofs,
		TrialGrowing,
		TrialRevenue,
		TrialQuestion
	},

	layout: 'landing',
	data() {
		return {
			result: {},
		}
	},
	methods: {
		onResize() {
			let spanArr

			const onScroll = () => {
				// TITLES
				for (let i = 0; i < spanArr.length; i++) {
					if (window.innerHeight - 200 >= spanArr[i].getBoundingClientRect().top) {
						spanArr[i].className = 'blue-bg anim'
					}
				}

			}


			if (window.innerWidth >= 480) {

				spanArr = document.getElementsByClassName('blue-bg')


				for (let i = 0; i < spanArr.length; i++) {
					if (window.innerHeight - 200 >= spanArr[i].getBoundingClientRect().top) {
						spanArr[i].className = 'blue-bg anim'
					}
				}
				window.addEventListener('scroll', onScroll)

			} else {
				window.removeEventListener('scroll', onScroll)

			}
		},
	},
	mounted() {
		// this.$store.dispatch('trial/fetchData');
		this.onResize()

		window.onscroll = function() {
			localStorage.setItem('value', window.pageYOffset);
		};
		  localStorage.getItem('value') && window.scrollTo(0, localStorage.getItem('value'));
	}
}
</script>

<style lang="less" scoped>

/deep/ .blue-bg {
  display  : inline-block;
  position : relative;
  /*color : #ffffff;*/
  z-index  : 2;
}

/deep/ .anim {
  color      : #ffffff;
  transition : 1.5s;
}

/deep/ .anim:before {
  position            : absolute;
  top                 : 0;
  left                : 0;
  content             : "";
  height              : 100%;
  width               : 0;
  background          : #4b79bb;
  /*transition: width 1s ease-in;*/
  z-index             : -1;
  animation           : left 1s;
  animation-fill-mode : forwards;
}

@keyframes left {
  from {
    width : 0;
  }
  to {
    width : 100%;
  }
}

.container-fluid {
  background : #ffffff;
}
</style>
