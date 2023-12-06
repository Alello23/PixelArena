import { createStore } from 'vuex';

export const setupStore = (app) => {
  const store = createStore({
    state: {
      selectedAttacks: {
        dropdown1: null,
        dropdown2: null,
        dropdown3: null,
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
        commit('setSelectedAttack', { dropdown: 'dropdown1', attack: null });
        commit('setSelectedAttack', { dropdown: 'dropdown2', attack: null });
        commit('setSelectedAttack', { dropdown: 'dropdown3', attack: null });
      },
    },
    getters: {
      getSelectedAttack: (state) => (dropdown) => state.selectedAttacks[dropdown],
    },
  });

  app.provide('store', store); // Provide the store to the app

  return store;
};