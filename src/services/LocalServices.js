import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getProductos() {
    return apiClient.get("/productos");
  },
  getProductoById(id) {
    return apiClient.get("/productos/" + id);
  },
  postProducto(producto) {
    return apiClient.post("/productos", producto);
  },
  postPedido(pedido) {
    return apiClient.post("/pedidos", pedido);
  },
  getPedidos() {
    return apiClient.get("/pedidos");
  },
  getPedido(id) {
    return apiClient.get("/pedidos/" + id);
  }
};
