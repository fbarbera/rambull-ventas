<template>
  <div>
    <h1>Vas a pedir {{ productos.length }} buenas birras!</h1>
    <form @submit="crearPedido">
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
        :class="{ btnDisable: !PedidoHabilitado }"
        value="Pedir!"
        :disabled="!PedidoHabilitado"
      />
    </form>
  </div>
</template>

<script>
//import { mapState } from "vuex";
const moment = require('moment');
export default {

  props: {
    productos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      message: "Vista Pedidos",
      pedido: {
        nombre: "",
        direccion: "",
        fecha: moment(new Date())
          .local()
          .format("'L'"),
        entregado: false,
        productosCargados: this.productos
      }
    };
  },
  methods: {
    crearPedido() {
      this.$store
        .dispatch("cargarPedido", this.pedido)
        .then(() => {
          this.$router.push({
            name: "Home"
          });
          this.pedido = this.crear();
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
        direccion: this.pedido.direccion
      };
    },
    limpiarPedido() {
      return {
        nombre: "",
        direccion: ""
      };
    }
  },
  computed: {
    PedidoHabilitado() {
      return this.pedido.nombre.length > 0 && this.pedido.direccion.length > 0;
    }
  },
  created() {
    this.$store.dispatch("fetchProductos");
  }
};
</script>

<style scoped>
.btnSubmit {
  background-color: #39b982;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: whitesmoke;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
.btnDisable {
  background-color: gray;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: black;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
.field {
  margin-bottom: 24px;
}
</style>
