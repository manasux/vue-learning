import { createStore } from 'vuex'
import firebase from 'firebase/app'

import router from "../router"

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
  },
  getters:{
    email: (state) => {
      if(state.user){
        return state.user.email;
      } else {
        return null;
      }
    },
    isAuthenticated: (state) => {
      state.isAuthenticated;
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.isAuthenticated = payload
    },
    setUser(state, payload)
  },
  actions: {
  }
})
