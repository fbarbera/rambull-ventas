<template>
  <div>
    <div class="pedido-header">
      <span class="eyebrow">{{ pedidos.fecha }}</span>
      <h3 class="title">{{ pedidos.nombre }}</h3>
      <h5>Pedido por: {{ pedidos.nombre }}</h5>
      <h5>Direccion de entrega: {{ pedidos.direccion }}</h5>
    </div>
    <h2>Detalle del pedido</h2>
    <p>Hay {{ pedidos.productosCargados }} birras pedidas</p>
    <h2>
      Productos
      <!-- <span class="badge -fill-gradient">{{
        pedido.productosCargados ? pedido.productosCargados.length : 0
      }}</span> -->
    </h2>

    <ul class="list-group">
      <li
        v-for="(prod, index) in ObtenerProductos"
        :key="index"
        class="list-item"
      >
        <b>{{ prod.id }}</b> |
        <b>{{ prod.estilo }}</b>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
//import LocalServices from "@/services/LocalServices";
export default {
  props: ["id"],
  data() {
    return {
      idPedido: this.id,
      idProducto: 0,
      productosObtenidos: []
      //ejecutar: this.ObtenerProductos()
    };
  },
  methods: {},
  created() {
    //console.log(this.prod);
    this.$store.dispatch("fetchProductos");
    this.$store.dispatch("fetchPedidoId", this.idPedido);
  },
  computed: mapState({
    pedidos: state => state.pedidos,
    productos: state => state.productos,
    ObtenerProductos() {
      var ProductosPedidos;
      const ProductosPedidos = this.pedidos.productosCargados;
      console.log(ids);
      return this.productos.array.forEach(x => {
          x.
      });
    }
  })
};
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.pedido-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
