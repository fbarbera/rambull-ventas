/* eslint-disable prettier/prettier */
<template>
  <div class="home">
    <!-- <h2>Rambull Hard Brewing</h2> -->
    <img alt="Rambull logo" src="../../public/img/RambullHB.jpg" />
    <ProducList @add-to-cart="updateCart" @remove-from-cart="removeFromCart" />
    <template v-if="ProductoSeleccionado.length > 0">
      <router-link
        :to="{ name: 'Pedidos', params: { productos: ProductoSeleccionado } }"
        >Hacer Pedido {{ ProductoSeleccionado.length }}</router-link
      >
    </template>
  </div>
</template>

<script>
// @ is an alias to /src

import ProducList from "@/components/Producto.vue";
// import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      ProductoSeleccionado: []
    };
  },
  methods: {
    updateCart(id) {
      this.ProductoSeleccionado.push(id);
    },
    removeFromCart(id) {
      for (var i = this.ProductoSeleccionado.length - 1; i >= 0; i--) {
        if (this.ProductoSeleccionado[i] === id) {
          this.ProductoSeleccionado.splice(i, 1);
        }
      }
    },
    setPedidos() {
      console.log(this.ProductoSeleccionado);
      this.$store.dispatch("cargarPedido", this.ProductoSeleccionado);
    }
  },
  components: {
    ProducList
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>
