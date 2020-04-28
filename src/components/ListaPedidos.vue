<template>
  <div>
    <router-link :to="{ name: 'PedidoDetalle', params: { id: pedido.id } }">
      <div class="event-card">
        <span>{{ pedido.fecha || formatDate }} </span>
        <h4 class="title">{{ pedido.nombre }}</h4>
        <h4 class="title">{{ pedido.direccion }}</h4>
        <h4 class="title">
          Cervezas pedidas: {{ pedido.productosCargados.length }}
        </h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    pedido: {
      type: Object
    }
  }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 whitesmoke, 0 1px 15px 0 wheat;
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: whitesmoke;
  text-decoration: none;
  font-weight: 100;
}
</style>
