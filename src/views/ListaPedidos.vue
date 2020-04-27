<template>
  <div>
    <ListaPedidos v-for="pedido in pedidos" :key="pedido.id" :pedido="pedido" />
  </div>
</template>

<script>
import ListaPedidos from "@/components/ListaPedidos.vue";
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("fetchPedidos");
    //this.productos=ProductosActivos();
    //filtro semana usa moment("20120620", "YYYYMMDD").fromNow();
  },
  computed: {
    PedidosPorFecha() {
      return this.$store.getters.PedidosPorFecha;
    },
    ...mapState(["pedidos"])
  },
  components: {
    ListaPedidos
  }
};
</script>

<style lang="scss" scoped></style>
