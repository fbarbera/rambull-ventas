<template>
  <div>
    <h1>Vas a pedir {{ productos.length }} buenas birras!</h1>
    <form @submit.prevent="crearPedido">
      <h3>Ingresa tus datos</h3>
      <div class="field">
        <label>Nombre y apellido</label>
        <input
          v-model="pedido.nombre"
          type="text"
          placeholder="Agrega tu nombre y apellido"
        />
      </div>
      <div class="field">
        <label>Direccion</label>
        <input
          v-model="pedido.direccion"
          type="text"
          placeholder="A donde te lo llevamos?"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="pedido.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <input
        type="submit"
        class="btnSubmit"
        value="Pedir!"
        v-if="!pedido.length"
      />
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      message: "Vista Pedidos",
      pedido: {
        nombre: "",
        direccion: "",
        location: ""
      }
    };
  },
  methods: {
    crearPedido() {
      this.$store
        .dispatch("cargarPedido", this.pedido)
        .then(() => {
          this.pedido = this.crear();
          this.pedido = this.limpiarPedido();
        })
        .catch(() => {
          console.log("Hubo un problema al cargar el pedido");
        });
    },
    crear() {
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        nombre: this.pedido.nombre,
        direccion: this.pedido.direccion,
        location: ""
      };
    },
    limpiarPedido() {
      return {
        nombre: "",
        direccion: "",
        location: ""
      };
    }
  },
  created() {
    this.$store.dispatch("fetchProductos");
  },
  computed: mapState(["productos"])
};
</script>

<style lang="scss" scoped></style>
