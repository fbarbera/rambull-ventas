<template>
  <div>
    <form @submit.prevent="crearPedido">
      <div class="field">
        <label>Nombre</label>
        <input type="text" placeholder="Complete con su nombre" />
      </div>
      <div class="field">
        <label>Direccion</label>
        <input type="text" placeholder="Direccion de entrega" />
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import LocalServices from "@/services/LocalServices.js";
export default {
  data() {
    return {
      pedido: 0
    };
  },
  methods: {
    crearPedido() {
      LocalServices.crearPedido(this.pedido)
        .then(response => {
          response.data;
        })
        .catch(error => {
          console.log("There was an error: ", error.response);
        });
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
