import Vue from "vue";
import Vuex from "vuex";
import LocalServices from "@/services/LocalServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    pedidos: [],
    usuarios: []
  },
  mutations: {
    SET_PRODUCTOS(state, productos) {
      state.productos = productos;
    },
    ADD_PEDIDO(state, pedido) {
      state.pedidos = pedido;
    }
  },
  actions: {
    crearPedido({ commit }, pedido) {
      return LocalServices.postPedido(pedido).then(() => {
        commit("ADD_PEDIDO", pedido);
      });
    },
    fetchProductos({ commit }) {
      LocalServices.getProductos()
        .then(response => {
          commit("SET_PRODUCTOS", response.data);
        })
        .catch(error => {
          console.log("There was an error: ", error.response);
        });
    }
  },
  modules: {}
});
