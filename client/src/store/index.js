import Vue from 'vue'
import Vuex from 'vuex'
import userSession from './modules/userSession'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        userSession: userSession,
    },

})

store.state.userSession

export default store