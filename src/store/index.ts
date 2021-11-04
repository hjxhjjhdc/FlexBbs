import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'


const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

export const store = createStore({
  state,mutations,getters,actions,
  plugins: [vuexLocal.plugin]
})