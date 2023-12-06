import { createStore } from 'vuex';

export const setupStore = (app) => {
  const store = createStore({
    state: {
      equippedAttacks: {
        dropdown1: null,
        dropdown2: null,
        dropdown3: null,
      },
      backpackedAttacks: [], // Array to store backpacked attacks
    },
    mutations: {
      setSelectedAttack(state, { dropdown, attack }) {
        state.equippedAttacks[dropdown] = attack;
      },
      addBackpackedAttack(state, backpackedAttack) {
        state.backpackedAttacks.push(backpackedAttack);
      },
      deleteBackpackedAttack(state, index) {
          state.backpackedAttacks.splice(index, 1);
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
      addBackpackedAttack({ commit }, backpackedAttack) {
        commit('addBackpackedAttack', backpackedAttack);
      },
      deleteBackpackedAttack({ commit }, index) {
        commit('deleteBackpackedAttack', index);
        // Optionally, you can also persist the updated backpacked attacks to a backend or localStorage.
      }
    },
    getters: {
      getSelectedAttack: (state) => (dropdown) => state.equippedAttacks[dropdown],
      getBackpackedAttacks: (state) => state.backpackedAttacks,
    },
  });

  app.provide('store', store); // Provide the store to the app

  return store;
};