// import axios from 'axios'
//
// export const state = () => ({
// 	user: {},
// 	manager: {},
// })
//
// export const mutations = {
// 	SET_USER(state, obj) {
// 		state.user = obj
// 	},
// 	SET_MANAGER(state, obj) {
// 		state.manager = obj
// 	}
// }
//
// export const actions = {
// 	fetchData({ commit }) {
// 		axios.get('/api/v1/get/user?scopes=id,email,tel,username&manager=1&website=1')
// 		// http://new.api.server00-vm15.semalt.local
// 			.then(res => {
// 				if (res.data.error) {
// 					return
// 				} else {
// 					commit('SET_USER', res.data.result.user)
// 					commit('SET_MANAGER', res.data.result.manager)
// 				}
// 			})
// 	}
// }


// import axios from 'axios'
//
// const API_RESULT = 'https://d.semalt.com/api/v1/get/user?scopes=id,email,tel,username&manager=1&website=1'
//
// function getResult() {
// 	return state.result
// }
//
// export const state = () => ({
// 	result: {},
// })
//
// export const mutations = {
// 	SET_RESULT (state, data) {
// 		state.result = data
// 		console.log('store', state.result)
// 	},
// }
//
// export const actions = {
// 	async fetchResult ({ commit })  {
//
// 		let result = await axios.get(API_RESULT)
// 		result = result.data
// 		console.log('res3213121421313213231254131', result)
// 		commit ('SET_RESULT', result)
// 	},
// }
