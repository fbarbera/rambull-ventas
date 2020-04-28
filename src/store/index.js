import Vue from "vue";
import Vuex from "vuex";
import LocalServices from "@/services/LocalServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    pedidos: [],
    usuarios: []
    //pedido: Object
  },
  mutations: {
    SET_PRODUCTOS(state, productos) {
      state.productos = productos;
    },
    SET_PRODUCTO(state, productos) {
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
    },
    SET_PEDIDO(state, pedido) {
      state.pedidos = pedido;
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
          console.log(
            "Hubo un error al obtener lista de productos: ",
            error.response
          );
        });
    },
    fetchProducto({ commit }, id) {
      LocalServices.getProducto(id)
        .then(response => {
          commit("SET_PRODUCTO", response.data);
        })
        .catch(error => {
          console.log(
            "Hubo un error al obtener  el prodcuto " + id + ": ",
            error.response
          );
        });
    },
    fetchPedidos({ commit }) {
      LocalServices.getPedidos()
        .then(response => {
          commit("SET_PEDIDOS", response.data);
        })
        .catch(error => {
          console.log(
            "Hubo un error al obtener lista de pedidos: ",
            error.response
          );
        });
    },
    fetchPedidoId({ commit, getters }, id) {
      var pedido = getters.getPedidoById(id);
      if (pedido) {
        commit("SET_PEDIDO", pedido);
      } else {
        LocalServices.getPedido(id)
          .then(response => {
            commit("SET_PEDIDO", response.data);
          })
          .catch(error => {
            console.log(
              "Hubo un error al obtener el pedido " + id + ": ",
              error.response
            );
          });
      }
    }
  },
  getters: {
    ProductosActivos: state => {
      return state.productos.filter(producto => (producto.disponible = true));
    },
    PedidosPorFecha: state => fecha => {
      return state.pedidos.filter(pedido => pedido.fecha === fecha);
    },
    getPedidoById: state => id => {
      return state.pedidos.filter(pedido => pedido.id === id);
    }
  },
  modules: {}
});
