import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedAttack: null,
  },
  mutations: {
    setSelectedAttack(state, attack) {
      state.selectedAttack = attack;
    },
  },
  actions: {
    selectAttack({ commit }, attack) {
      commit('setSelectedAttack', attack);
    },
  },
  getters: {
    getSelectedAttack: (state) => state.selectedAttack,
  },
});