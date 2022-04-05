import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: ''
    }, 
    isAuthenticated: false,
    wistoken: ''
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if(localStorage.getItem('wistoken')) {
        state.token = localStorage.getItem('wistoken')
        state.isAuthenticated = true
      } else {
        state.wistoken = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, wistoken) {
      state.wistoken = wistoken
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.wistoken = ''
      state.isAuthenticated = false
    }
  },
  actions: {
  },
  modules: {
  }
})
