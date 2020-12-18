import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    Washington: null,
    London: null,
    Stockholm: null,
    Bryssel: null,
    Helsinki: null,
    Oslo: null,
    Paris: null,
    Berlin: null,
    Dublin: null,
    Tokyo: null,
    Toronto: null,
    Prag: null,
    msg:"Welcome to Glocast"

  },
  mutations: {
    setWashington(state, result) {
      state.Washington = result + "c";
    },
    setLondon(state, result) {
      state.London = result+ "c";
    },
    setStockholm(state, result) {
      state.Stockholm = result+ "c";
    },
    setBryssel(state, result) {
      state.Bryssel = result+ "c";
    },
    setHelsinki(state, result) {
      state.Helsinki = result+ "c";
    },
    setOslo(state, result) {
      state.Oslo = result+ "c";
    },
    setParis(state, result) {
      state.Paris = result+ "c";
    },
    setBerlin(state, result) {
      state.Berlin = result+ "c";
    },
    setDublin(state, result) {
      state.Dublin = result+ "c";
    },
    setTokyo(state, result) {
      state.Tokyo = result+ "c";
    },
    setToronto(state, result) {
      state.Toronto = result+ "c";
    },
    setPrag(state, result) {
      state.Prag = result+ "c";
  },
  },

  actions: {

  },
  modules: {
  }
})
