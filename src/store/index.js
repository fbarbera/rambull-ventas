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
    ADD_PRODUCTO(state, producto) {
      state.productos = producto;
    },
    ADD_PEDIDO(state, pedido) {
      state.pedidos = pedido;
    },
    SET_PEDIDOS(state, pedidos) {
      state.pedidos = pedidos;
    }
  },
  actions: {
    cargarPedido({ commit }, pedidos) {
      return LocalServices.postPedido(pedidos).then(() => {
        commit("ADD_PEDIDO", pedidos);
      });
    },
    cargarProducto({ commit }, producto) {
      return LocalServices.postProducto(producto).then(() => {
        commit("ADD_PRODUCTO", producto);
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
    },
    fetchPedidos({ commit }) {
      LocalServices.getPedidos()
        .then(response => {
          commit("SET_PEDIDOS", response.data);
        })
        .catch(error => {
          console.log("There was an error: ", error.response);
        });
    }
  },
  getters: {
    ProductosActivos: state => {
      return state.productos.filter(producto => (producto.disponible = true));
    },
    PedidosPorFecha: state => fecha => {
      return state.pedidos.filter(pedido => pedido.fecha === fecha)
    }
  },
  modules: {}
});
