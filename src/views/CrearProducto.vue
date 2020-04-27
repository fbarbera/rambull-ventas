<template>
  <div>
    <router-link to="/ListaPedidos">Pedidos</router-link>
    <CrearProducto />
  </div>
</template>

<script>
import CrearProducto from "@/components/CrearProducto.vue";
export default {
  components: {
    CrearProducto
  }
};
</script>

<style lang="scss" scoped></style>
