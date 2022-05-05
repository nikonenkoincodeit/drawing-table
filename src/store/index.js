import { createStore } from "vuex";

export default createStore({
  state: {
    showForm: true,
  },
  mutations: {
    TOGGLE_SHOW_FORM(state, payload) {
      state.showForm = payload;
    },
  },
  actions: {
    TOGGLE_SHOW_FORM: ({ commit }, payload) => {
      commit("TOGGLE_SHOW_FORM", payload);
    },
  },
});
