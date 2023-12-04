import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedAttacks: {
      dropdown1: null,
      dropdown2: null,
      dropdown3: null,
      // Add more if needed
    },
  },
  mutations: {
    setSelectedAttack(state, { dropdown, attack }) {
      state.selectedAttacks[dropdown] = attack;
    },
  },
  actions: {
    selectAttack({ commit }, { dropdown, attack }) {
      commit('setSelectedAttack', { dropdown, attack });
    },
    clearSavedAttacks({ commit }) {
      // Clear all saved attacks
      commit('setSelectedAttack', { dropdown: 'dropdown1', attack: null });
      commit('setSelectedAttack', { dropdown: 'dropdown2', attack: null });
      commit('setSelectedAttack', { dropdown: 'dropdown3', attack: null });
    },
  },
  getters: {
    getSelectedAttack: (state) => (dropdown) => state.selectedAttacks[dropdown],
  },
});