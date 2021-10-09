import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarioActual: null,
  },
  mutations: {
    SET_CURRENT_USER(state, nuevoUsuario) {
      state.usuarioActual = nuevoUsuario;
    },
  },
  actions: {
    definirUsuarioActual(context, usuario) {
      context.commit("SET_CURRENT_USER", usuario);
    },
  },
  modules: {},
});
