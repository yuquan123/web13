import Vuex from 'vuex'
import Vue from 'vue'

import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'



Vue.use(Vuex) // 必须使用下vuex
export default new Vuex.Store({state,mutations,getters})