import { createStore } from "vuex";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "@/config/firebase-config";
import { checkUserDetails } from "@/service/auth";

initializeApp(firebaseConfig);
const auth = getAuth();

export default createStore({
  state: {
    showForm: true,
    user: null,
  },
  getters: {
    GET_USER: (state) => {
      return state.user;
    },
  },
  mutations: {
    TOGGLE_SHOW_FORM: (state, payload) => {
      state.showForm = payload;
    },
    GET_USER: (state, payload) => {
      state.user = payload;
    },
  },
  actions: {
    TOGGLE_SHOW_FORM: ({ commit }, payload) => {
      commit("TOGGLE_SHOW_FORM", payload);
    },
    VALIDATE_USER: (_, payload) => {
      return checkUserDetails(payload)
        .then((response) => response)
        .catch((error) => {
          throw new Error(error);
        });
    },
    GET_USER: ({ commit }) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          commit("GET_USER", user);
        } else {
          commit("GET_USER", null);
        }
      });
    },
  },
});
