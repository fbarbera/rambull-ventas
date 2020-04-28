<template>
  <div>
    <form @submit.prevent="cargarProducto">
      <div class="field">
        <label>Estilo</label>
        <input
          v-model="producto.estilo"
          type="text"
          placeholder="Estilo de cerveza"
        />
      </div>
      <div class="field">
        <label>IBU</label>
        <input v-model="producto.ibu" type="text" placeholder="IBU" />
      </div>
      <div class="field">
        <label>Graduacion alcoholica</label>
        <input
          v-model="producto.graduacion"
          type="text"
          placeholder="Graduacion alcoholica"
        />
      </div>
      <div class="field">
        <label>Subir Imagen</label>
        <br />
        <input
          type="file"
          accept="image/*"
          @change="uploadImage($event)"
          id="file-input"
        />
      </div>
      <div>
        <input type="submit" class="btnSubmit" value="Cargar Producto" />
      </div>
    </form>
  </div>
</template>

<script>
//import axios from "axios";
import VueResource from "vue-resource";

export default {
  data() {
    return {
      producto: {
        id: 0,
        estilo: "",
        ibu: "",
        graduacion: "",
        disponible: true,
        imagen: ""
      }
    };
  },
  methods: {
    cargarProducto() {
      this.$store
        .dispatch("cargarProducto", this.producto)
        .then(() => {
          this.$router.push({
            name: "Home"
          });
          this.producto = this.crear();
        })
        .catch(() => {
          console.log("Hubo un problema al cargar el producto");
        });
    },
    crear() {
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        estilo: this.producto.estilo,
        ibu: this.producto.ibu,
        graduacion: this.producto.graduacion,
        disponible: true,
        imagen: this.producto.imagen
      };
    }
  },
  uploadImage(event) {
    //const path = "../../public/img/";
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("my-file", file);
    VueResource.http
      .post(`../../public/img`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(
        res => {
          console.log("Se subio el archivo " + res)
        },
        error => {
          console.log("Hubo un error: " + error)
        }
      );
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
