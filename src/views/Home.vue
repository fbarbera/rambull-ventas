<template>
  <div class="home">
    <img alt="Rambull logo" src="../../public/img/Birras.jpg" />
    <HelloWorld msg="Rambull Hard Brewing" />
    <ProducList @add-to-cart="updateCart" @remove-from-cart="removeFromCart" />
    <template v-if="ProductoSeleccionado.length > 0">
      <router-link  to="/Pedidos">Hacer Pedido {{ ProductoSeleccionado.length }}</router-link>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ProducList from "@/components/Producto.vue";

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
    }
  },
  components: {
    HelloWorld,
    ProducList
  }
};
</script>
