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
  getProducto(id) {
    return apiClient.get("/productos/" + id);
  },
  postPedido(pedido) {
    return apiClient.post("/pedido", pedido);
  },
  getPedidos(){
    return apiClient.get("/pedido");
  }
};
