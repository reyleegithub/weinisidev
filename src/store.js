import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    nnload:false,
    rbload:false,
    lhload:false,
    sbload:false,
    bcload:false,
    userinfo: {}
  },
  mutations: {
    setuserinfo(state, x) {
      state.userinfo = x;
    },
    setbalance(state, x) {
      state.userinfo.balance = x;
    }
  },
  actions: {},
  getters: {
    getuserinfo(state) {
      return state.userinfo;
    }
  }
});
